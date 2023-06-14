import React, { lazy, Suspense, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import PrivateRoutes from "../utils/PrivateRoutes";
import AuthContext, { AuthProvider } from "../context/AuthContext";
import fetchIntercept from "fetch-intercept";
import useFetch from "../hooks/useFetch";

const AboutPage = lazy(() => import("./AboutPage"));
const ContactPage = lazy(() => import("./ContactPage"));
const ProductsPage = lazy(() => import("./ProductsPage"));
const ProductPage = lazy(() => import("./ProductPage"));
const LoginPage = lazy(() => import("./LoginPage"));

const App = () => {
  const [language, setLanguage] = React.useState("en");
  const [theme, setTheme] = React.useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    const unregister = useFetch();
    return () => {
      unregister();
    };
  }, []);

  useEffect(() => {
    setLanguage(window.localStorage.getItem("language"));
    if ("theme" in localStorage) setTheme(window.localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.getElementsByTagName("html")[0].setAttribute("lang", language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  if (!language) {
    setLanguage("en");
  }

  return (
    <div className="p-0 m-o">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <AuthProvider>
            <Suspense fallback={<div>Loading ...</div>}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} exact />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route element={<PrivateRoutes />}></Route>
                </Routes>
              </BrowserRouter>
            </Suspense>
          </AuthProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
