import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
const marked = require('marked');

function App () {
    const [isShowEditor,setIsShowEditor] = useState(1);
    const [text,setText] = useState(initalText);
    return (
      <div className="app">
          {(isShowEditor == 3) && <Previewer_Preview chageEditor_1 = {() => setIsShowEditor(1)} text={text}/>}
          {(isShowEditor == 2) && <Editor_Preview chageEditor_1 = {() => setIsShowEditor(1)} text={text} setText={setText}/>}
          {(isShowEditor == 1) && <Editor chageEditor_2 = {() => setIsShowEditor(2)} text={text} setText={setText}/> }
          {(isShowEditor == 1) && <Previewer chageEditor_3 = {() => setIsShowEditor(3)} text={text}/> }
      </div>
    );
}


function Editor (props) {
    return (
      <div className="editor" id="editor">
          <div id='header-area'>
            <button className="btn-header" id='btn-#1' onClick={props.chageEditor_2}>Preview</button>
          </div>
          <textarea id='text_area_editor' value={props.text} onChange={e => props.setText(e.target.value)}>
          </textarea>
      </div>
    );
}

function Previewer(props) {
  useEffect(()=>{
    document.getElementById('text_area_previewer').innerHTML =
    marked(props.text)
  },[props.text])
    return (
      <div className="previewer" id="preview">
          <div id='header-area'>
            <button className="btn-header" id='btn-#1' onClick={props.chageEditor_3}>Preview</button>
          </div>
          <div id='text_area_previewer'>
          </div>
      </div>
    );
}

function Editor_Preview (props) {
  return (
    <div className="preview_mode">
        <div id='header-area'>
          <button className="btn-header" id='btn-#1' onClick={props.chageEditor_1}>Back</button>
        </div>
        <textarea id='text_area_preview_mode' value={props.text} onChange={e => props.setText(e.target.value)}> 
        </textarea>
    </div>
  );
}

function Previewer_Preview (props) {
  useEffect(()=>{
    document.getElementById('text_area_preview_mode').innerHTML =
    marked(props.text)
  },[props.text])
  return (
    <div className="preview_mode">
        <div id='header-area'>
          <button className="btn-header" id='btn-#1' onClick={props.chageEditor_1}>Back</button>
        </div>
        <div id='text_area_preview_mode'>
        </div>
    </div>
  );
}

const initalText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.`;

export default App;
