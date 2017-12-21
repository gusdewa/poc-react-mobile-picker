import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileSelect from 'mobile-select';

/**
 * Get relative position of an array
 * @param {Array} values 
 * @param {String} selectedValue 
 */
const findPosition = (values, selectedValue) => {
  if (!values || !selectedValue || !Array.isArray(values)) {
    return 0;
  }

  const index = values.map(x => x.value)
    .indexOf(selectedValue);

    // if not found, then return 0 as a default value
  return index === -1 ? 0 : index;
}

class MobilePicker extends Component {
  componentDidMount() {
    const {
      id,
      title,
      values,
      selectedValue,
      onSelect,
      okLabel,
      cancelLabel,
    } = this.props;

    const mobileSelect = new MobileSelect({
      trigger: `#${id}`,
      title,
      wheels: [{
        data: values
      }],
      ensureBtnText: okLabel || 'OK',
      cancelBtnText: cancelLabel || 'Cancel',
      callback: onSelect,
      position: findPosition(values, selectedValue),
    });
  }

  render() {
    const { id, label, values } = this.props;
    return (
      <button id={id}>{label || values[0].value}</button>
    );
  }
}

MobilePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default MobilePicker;
