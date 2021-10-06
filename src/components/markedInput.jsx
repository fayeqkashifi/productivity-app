import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Draggable from 'react-draggable';

 
const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export function MarkedInput(props) {
  //context for set the markdown text
  const { setMarkdownText } = useContext(editorContext);
  // set the markdownTest 
  // this code use for textArea 
  // const onInputChange = e => {
  //   const newValue = e.currentTarget.value;
  //   setMarkdownText(newValue);
  // };
  
  return (
    <Draggable>
      <Container>
        <Title>Markdown Text</Title>
        <CodeMirror
          value=""
          height="500px"
          theme=  'dark'
          extensions={[javascript({ jsx: true, })]}
          onChange={(value) => {
            setMarkdownText(value);
          }}
        />
        {/* <TextArea onChange={onInputChange} /> */}
      </Container>
    </Draggable>

  );
}
