import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editorContext from "../editorContext";
import MDEditor from '@uiw/react-md-editor';
import Draggable from 'react-draggable';


// style for container
const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  font-family: "Lato", sans-serif;
`;
// style for title 
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;
// style for textArea
const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export function Result(props) {
  
  const { markdownText,setMarkdownText } = useContext(editorContext);


  const downloadTextFile=()=>{
    const element=document.createElement('a');
    const file =  new Blob([markdownText],{
      type:"text/plain;charset=uft-8"
    });
    element.href = URL.createObjectURL(file);
    element.download= "newFile.txt";
    document.body.appendChild(element);
    element.click()
  }

  return (
    <Draggable>
      <Container>
        {/* jsut for title  */}
        <Title>Converted Text</Title>
        <ResultArea>
          {/* FIRST WAY FOR Markdwon */}
            <MDEditor
              height="500px"
              value={markdownText}
              onChange={setMarkdownText}
            />
          {/* SECOND WAY set the value of markdownText */}
          {/* <ReactMarkdown children={markdownText} /> */}

          {/* button for download the text  */}
          <Button  onClick={downloadTextFile}>Export</Button>

        </ResultArea>
      </Container>
    </Draggable>
  );
}
