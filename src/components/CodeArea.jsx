import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';

export default function CodeArea() {
  const code = 'const a = 0;';

  <CodeMirror
    value={code}
    options={{
      // theme: 'monokai',
      tabSize: 2,
      // keyMap: 'sublime',
      mode: 'jsx',
    }}
  />
}