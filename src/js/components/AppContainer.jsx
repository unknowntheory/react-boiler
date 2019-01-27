import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainApp from '../pages/MainApp.jsx';


class AppContainer extends Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div>
       <MainApp />
      </div>
    );
  }
}
export default AppContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;