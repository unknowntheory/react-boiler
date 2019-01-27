import React, { Component } from "react";


class PublishContainer extends Component {
    constructor(){
        super()
        this.state = {
          value:'ikameukri',
        }
        this.handleChange =  this.handleChange.bind(this);
    }

    handleChange(){
      this.setState({value: event.target.value});
    }

    render(){
        return(
          <div>
              <form>
                  Thoughts:
                  <textarea value={this.state.value} onChange={this.handleChange} />
                  <input type="submit" value="submit"/>
              </form>
          </div>
        )
    }
}

export default PublishContainer;