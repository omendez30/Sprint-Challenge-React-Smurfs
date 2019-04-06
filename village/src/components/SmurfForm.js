import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border: 1px solid blue;
  padding: 10%;
  height: 100%;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 50%;
`;
const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 2em;
  margin: 50px 10px;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        console.log(response.data);
        this.props.updateSmurfs(response.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledFormDiv className="SmurfForm">
        <StyledForm onSubmit={this.addSmurf}>
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>
            Add to the village
          </button>
        </StyledForm>
      </StyledFormDiv>
    );
  }
}

export default SmurfForm;
