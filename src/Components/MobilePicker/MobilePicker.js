import React, { Component } from 'react';
import MobileSelect from 'mobile-select';

class MobilePicker extends Component {
  componentDidMount() {
    // MobileSelect is a function wrapped in IIFE
    const mobileSelect = new MobileSelect({
      trigger: '#counter',
      title: 'TITLE',
      wheels: [
        { data: ['1', '2', '3', '4', '5', '6', '7'] }
      ],
      position: [2] //Initialize positioning
    });
  }

  render() {
    return (
      <div id="counter" />
    );
  }
}

export default MobilePicker;