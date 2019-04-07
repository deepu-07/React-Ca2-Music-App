import React, { Component } from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableData: [],
      temp: {
        songname: "",
        songwriter: "",
        Release_Date: ""
      },
      modal: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  submitForm(item) {
    if (item.songname === "" || item.songwriter === "") {
      return alert("Enter Details");
    } else {
      let temp_array = [...this.state.TableData];
      console.log(temp_array);
      temp_array.push(item);
      console.log(temp_array);

      this.setState({
        TableData: temp_array,
        modal: false,
        temp: initial_state
      });

      console.log(item);
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="m-4">
          <Form
            toggle={this.toggle}
            modal={this.state.modal}
            submitForm={this.submitForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
