import React, { Component } from "react";

import Flippy, { FrontSide, BackSide } from 'react-flippy';

class FlippingCardPage extends Component {

    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
      return(
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()

    style={{padding:"20px" , width: '330px', height: '350px'}}
  >
    <FrontSide
      style={{
        backgroundColor: '#f1f3f8',
        color: '#1a1a2e'
      }}
    >
    <h3 style={{color:'#a6a6a4'}}>{this.props.title}</h3>
    <p>{this.props.text}</p>
    <p>{this.props.text1}</p>
    <p>{this.props.text2}</p>
    <p>{this.props.text3}</p>
    
    <h5 style={{color:'#62760c'}}>Click here to know more</h5>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#a2d5f2', color:'#158467'}}>
      <br></br>
      <br></br>
      <h2 style={{fontWeight:"bolder"}}>Free for 6 months</h2>
      <h5>~$72 Savings</h5>
    <br></br>
    <h4>Flip me Back</h4>
    </BackSide>
  </Flippy>
);
}
}
export default FlippingCardPage;
