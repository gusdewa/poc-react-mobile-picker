import React, { Component } from 'react';

import MobilePicker from '../../Components/MobilePicker';

/**
 * Needs to read from the given point XML
 * then to populate accordingly
 */
const mockGetMultiplierValues = () => [
  { id: '1', value: '1' },
  { id: '2', value: '2' },
  { id: '3', value: '3' },
  { id: '4', value: '4' },
  { id: '5', value: '5' },
  { id: '6', value: '6' }
];

const mockGetSelectedValue = () => '1';

class TouchingLivesPage extends Component {
  constructor(props) {
    super(props);
    this.handlePickerSelect = this.handlePickerSelect.bind(this);
    this.state = {
      // TODO: To move into props injected from the Redux store
      values: mockGetMultiplierValues(),
      selectedValue: mockGetSelectedValue(),
    }
  }

  handlePickerSelect(arrIndex, data) {
    this.setState({
      selectedValue: data[0].value,
    });
  }

  render() {
    const { selectedValue, values } = this.state;

    return (
      <div>
        <span>Times</span>
        <MobilePicker
          id="times"
          values={values}
          selectedValue={selectedValue}
          onSelect={this.handlePickerSelect}
        />
      </div>
    );
  }
}

export default TouchingLivesPage;
