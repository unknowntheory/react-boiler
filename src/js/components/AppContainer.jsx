import React, { Component } from "react";
import ReactDOM from "react-dom";
import PublishContatiner from  './PublishContainer.jsx'


class AppContainer extends Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div>
       <PublishContatiner />
      </div>
    );
  }
}
export default AppContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;