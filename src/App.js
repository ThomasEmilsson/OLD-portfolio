import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.goToGoogle = this.goToGoogle.bind(this);
    }

    goToGoogle(){
        window.open("https://nextjs-20m4nnbnw.now.sh/", "_blank")
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> ... </h1>
            <button type="button" className="btn btn-default" onClick={this.goToGoogle}>Test</button>
        </header>
      </div>
    );
  }
}

export default App;
