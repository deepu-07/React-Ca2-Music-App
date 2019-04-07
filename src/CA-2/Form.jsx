import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songname: "",
      songwriter: "",
      singer: "",
      Release_Date: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button color="info" onClick={this.props.toggle}>
          {this.props.buttonLabel}
          Add Song
        </Button>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className="float-center"
        >
          <ModalHeader
            style={{ backgroundColor: "#00BFFF", borderColor: "#00BFFF" }}
            toggle={this.props.toggle}
          >
            Enter Song details
          </ModalHeader>
          <ModalBody
            body
            inverse
            style={{
              backgroundColor: "#DCDCDC",
              borderColor: "#DCDCDC",
              fontSize: 17
            }}
          >
            <div className="col">
              <div className="row">
                <label className="m-2">
                  Song Name:
                  <br />
                  <input
                    type="text"
                    className="form-control sm"
                    placeholder="Enter Song Name"
                    name="songname"
                    value={this.state.songname}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <label className="m-2">
                  Song Writer :
                  <br />
                  <input
                    type="text"
                    className="form-control sm "
                    placeholder="Enter Writer name"
                    name="songwriter"
                    value={this.state.songwriter}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <label className="m-2">
                  Singer :
                  <br />
                  <input
                    type="text"
                    className="form-control sm "
                    placeholder="Enter Singer name"
                    name="singer"
                    value={this.state.singer}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <label className="m-2">
                  Release Date:
                  <br />
                  <input
                    type="Date"
                    className="form-control sm "
                    placeholder="Enter Release Date"
                    name="Release_Date"
                    value={this.state.Release_Date}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="btn btn-primary m-2"
                  onClick={() => {
                    return (
                      this.props.submitForm(this.state),
                      this.setState({
                        songname: "",
                        songwriter: "",
                        singer: "",
                        Release_Date: ""
                      })
                    );
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Form;
