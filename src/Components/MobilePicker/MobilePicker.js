import React, { Component } from 'react';
import MobileSelect from 'mobile-select';

const populateData = () => {
  const data=[];
  for (let index = 0; index < 1000; index++) {
    data.push(index);
  }
  return data;
}

class MobilePicker extends Component {
  componentDidMount() {
    // MobileSelect is a function wrapped in IIFE
    const mobileSelect = new MobileSelect({
      trigger: '#counter',
      title: 'TITLE',
      wheels: [
        { data: populateData() }
      ],
      position: [2] //Initialize positioning
    });
  }

  render() {
    return (
      <input type="text" id="counter" placeholder="Select Counter" />
    );
  }
}

export default MobilePicker;