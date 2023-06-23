import React, { useContext, useEffect } from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import {
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
} from "polotno/side-panel";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";

import ThemeContext from "../context/ThemeContext";
import Nav from "./Nav";
import { createStore } from "polotno/model/store";

const store = createStore({
  key: import.meta.env.VITE_POLOTNO_KEY,
  showCredit: true,
});
const sections = [TextSection, PhotosSection, ElementsSection, UploadSection];

const Editor = () => {
  let [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    const page = store.addPage();
    page.set({
      background: "../../assets/images/temp.png",
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("bp4-dark");
    } else {
      document.body.classList.remove("bp4-dark");
    }
  }, [theme]);

  return (
    <div>
      <Nav />
      <link href="https://unpkg.com/normalize.css@^8.0.1" rel="stylesheet" />

      <link
        href="https://unpkg.com/@blueprintjs/icons@^4.0.0/lib/css/blueprint-icons.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/@blueprintjs/core@^4.0.0/lib/css/blueprint.css"
        rel="stylesheet"
      />
      <PolotnoContainer style={{ width: "100vw", height: "90vh" }}>
        <SidePanelWrap>
          <SidePanel store={store} sections={sections} defaultSection="text" />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} />
          <Workspace
            store={store}
            components={{ PageControls: () => null }}
            backgroundColor={theme === "dark" ? "#293742" : "#D9D9D9"}
          />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
};

export default Editor;
