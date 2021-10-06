import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markedInput";
import { Result } from "./components/result";
import EditorContext from "./editorContext";

// style for app container
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// style for title
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;
// style for editor container
const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
  // create a state 
  const [markdownText, setMarkdownText] = useState("");
   
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          {/* right side the markdown component */}
          <MarkedInput />
          {/* the left side result component */}
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}
