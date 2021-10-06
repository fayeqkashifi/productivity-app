import React from "react";
// define detault  value 

const defaultContext = {
  markdownText: "",
  setMarkdownText: () => {}
};

export default React.createContext(defaultContext);
