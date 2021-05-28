
import React, { useState, useEffect } from "react";
import style from './counter.modules.scss';
import PropTypes from 'prop-types';

class SecondCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    increment = () => {
      const {counter} = this.state;
      this.setState({counter: counter + 1});
    }
    decrement = () => {
      const {counter} = this.state;
      this.setState({counter: counter - 1});
    }
    render() {
      return(
          <div>{SecondCounter}</div>
      )
  }
}
 
export default SecondCounter;