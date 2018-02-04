import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';
import { 
  INPUT_TEXT_COLOR, 
  FONT_GRAY_COLOR, 
  BACKGROUND_COLOR, 
  BACKGROUND_LIGHTGRAY_COLOR,
} from 'constants/color';

export default class SelectOption extends Component {
  render = () => {
    const selectOptionStyle = {
      backgroundColor: 
      this.props.selected ? this.props.selectedBackgroundColor : this.props.backgroundColor,
    };

    const selectOptionTextStyle = {
      color: this.props.selected ? this.props.selectedColor : this.props.color,
    };

    return (
      <View style={[styles.selectOption, selectOptionStyle]}>
        <Text style={[styles.selectOptionText, selectOptionTextStyle]}>
          {this.props.text}
        </Text>
      </View>
    );
  };
}

SelectOption.defaultProps = {
  backgroundColor: BACKGROUND_COLOR,
  selectedBackgroundColor: BACKGROUND_LIGHTGRAY_COLOR,
  color: FONT_GRAY_COLOR,
  selectedColor: INPUT_TEXT_COLOR,
  selected: false,
  text: null,
};

SelectOption.propTypes = {
  backgroundColor: PropTypes.string,
  selectedBackgroundColor: PropTypes.string,
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  selected: PropTypes.bool,
  text: PropTypes.string,
};
