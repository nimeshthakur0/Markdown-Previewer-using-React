//Allow line break with return button
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


//insert target = _blank into href tags


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false };


    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximized = this.handleEditorMaximized.bind(this);
    this.handlePreviewMaximized = this.handlePreviewMaximized.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }

  handleEditorMaximized() {
    this.setState({
      editorMaximized: !this.state.editorMaximized });

  }

  handlePreviewMaximized() {
    this.setState({
      previewMaximized: !this.state.previewMaximized });

  }

  render() {
    const classes = this.state.editorMaximized ? ['editorWrap Maximized', 'previewWrap Hide', 'fa fa-compress'] :
    this.state.previewMaximized ? ['editorWrap Hide', 'previewWrap Maximized', 'fa fa-compress'] :
    ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: classes[0] }, /*#__PURE__*/
      React.createElement(Toolbar, { icon: classes[2], text: "Editor", onClick: this.handleEditorMaximized }), /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "converter" }), /*#__PURE__*/
      React.createElement("div", { className: classes[1] }, /*#__PURE__*/
      React.createElement(Toolbar, { icon: classes[2], text: "Previewer", onClick: this.handlePreviewMaximized }), /*#__PURE__*/
      React.createElement(Preview, { markdown: this.state.markdown }))));



  }}
;

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-free-code-camp", title: "no-stack-dub-sack" }),
    props.text, /*#__PURE__*/
    React.createElement("i", { className: props.icon, onClick: props.onClick })));


};

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor", onChange: props.onChange, type: "text", value: props.markdown }));

};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown) },

      id: "preview" }));


};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

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

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));