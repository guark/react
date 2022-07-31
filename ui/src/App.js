import g from 'guark'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    g.hook("mounted")
  }

  async helloWorld()
  {
    var hello_data = await g.call("hello_world", { name: "Guark working?" })
    console.log(`hello_world call return data: ${hello_data}`)
  }

  render()
  {

    const helloWorld = async (e) => {
      var hello_data = await g.call("hello_world", { name: "Guark working?" })
      console.log(`hello_world call return data: ${hello_data}`)
    }

    function clipboardWrite()
    {
      g.call("clipboard.write", { text: "guark" }).then(() =>
      {
        g.call("notify.send", { message: "Guark copied to your clipboard" })
      })
    }

    function errorDialog()
    {
      g.call("dialog.error", { message: "this is a error from js api! is this working?" })
    }

    function infoDialog()
    {
      g.call("dialog.info", { message: "this is a info from js api! is this working?" })
    }

    function notify()
    {
      g.call("notify.send", { message: "This is a notify test call from ui javascript api." })
    }

    function select()
    {
      g.call("dialog.file", { title: "Select File For Guark APP!" }).then(res =>
      {
        g.call("notify.send", { message: "File Selected: " + res })
      })
    }

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={helloWorld}>Hello World</button>
          <button onClick={clipboardWrite}>Write to clipboard</button>
          <button onClick={errorDialog}>Call Dialog error!</button>
          <button onClick={infoDialog}>Call Plugin Dialog info!</button>
          <button onClick={notify}>Call Plugin Notify!</button>
          <button onClick={select}>Call Plugin Dialog Select file!</button>

        </div>
      </header>
    </div>
    );

  }
}

export default App;
