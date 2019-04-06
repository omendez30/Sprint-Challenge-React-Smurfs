import React, { Component } from "react";

import Smurf from "./Smurf";
import styled from "styled-components";

const SmurfsDiv = styled.div`
  color: #fff;
  background: url("https://www.topbestalternatives.com/wp-content/uploads/2017/11/smurfs-village.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const SmurfH1 = styled.h1``;
class Smurfs extends Component {
  render() {
    return (
      <SmurfsDiv className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
