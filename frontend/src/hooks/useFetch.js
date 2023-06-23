import fetchIntercept from "fetch-intercept";

let useFetch = () => {
  return fetchIntercept.register({
    request: function (url, config) {
      // Modify the url or config here

      let authTokens = localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null;

      if (!config) {
        config = { headers: {} };
      }

      if (!config.headers) {
        config.headers = {};
      }

      if (!url.includes(import.meta.env.VITE_API_BASE_URL)) {
        return [url, config];
      }

      // if the request doesn't have the authorization header
      if (!config.headers["Authorization"] && authTokens) {
        config.headers["Authorization"] = `Bearer ${
          authTokens ? authTokens.access : null
        }`;
      }

      return [url, config];
    },

    response: async function (response) {
      let refreshToken = localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens")).refresh
        : null;

      if (!response.request.url.includes(import.meta.env.VITE_API_BASE_URL)) {
        return response;
      }

      if (response.status === 401 && refreshToken) {
        let res = await fetch(
          import.meta.env.VITE_API_BASE_URL + "/api/token/refresh/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh: refreshToken,
            }),
          }
        );
        let data = await res.json();
        if (data?.access) {
          let NewAuthTokens = {
            access: data.access,
            refresh: localStorage.getItem("authTokens")
              ? JSON.parse(localStorage.getItem("authTokens")).refresh
              : null,
          };
          localStorage.setItem("authTokens", JSON.stringify(NewAuthTokens));
          const e = new StorageEvent("storage");
          window.dispatchEvent(e);
        } else {
          return response;
        }

        let new_headers = {
          ...response.request.headers,
          Authorization: `Bearer ${data.access}`,
        };

        response = fetch(response.request.url, {
          method: response.request.method,
          headers: new_headers,
          body: response.request.body,
        });
      }

      return response;
    },
  });
};

export default useFetch;
