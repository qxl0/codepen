import React, { useState , useEffect} from 'react'
import Editor from "./Editor";

function App() {
  const [html, setHtml]= useState('')
  const [css, setCss]= useState('')
  const [js, setJs]= useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
    }, 250)
    return ()=> clearTimeout(timeout)
  }, [css, html, js])
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="Javascript" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe title="output" sandbox="allow-scripts" frameBorder="0"
          srcDoc={srcDoc}
          width="100%" height="100%" />
      </div>
    </>
  );
}

export default App;
