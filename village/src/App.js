import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledNavLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3ac0fb;
`;
const StyledNavLink = styled(NavLink)`
  
  justify-content: center;
  align-items: space-between;
  text-decoration: none;
  font-weight: 700;
  color: #FFF;
  border: 1px solid #fff;
  margin: 10px auto;
  border-radius: 10px;
  padding 5px;
  font-size: 2em;

  &:hover{
    background: #fff;
    color:#62cdfd;
  }
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response.data);
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppDiv className="App">
        <StyledNavLinkDiv>
          <StyledNavLink to="/">Smurfs</StyledNavLink>
          <StyledNavLink to="/smurf-form">Add Smurf to Village</StyledNavLink>
        </StyledNavLinkDiv>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              updateSmurfs={this.updateSmurfs}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </AppDiv>
    );
  }
}

export default App;
