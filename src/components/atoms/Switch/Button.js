import React, { Component } from 'react';
import { Image, View } from 'react-native';

import toggleOn from 'assets/images/togleOn.png';
import toggleOff from 'assets/images/togleOff.png';

export default class Button extends Component {
render = () => (<View style={{width:200, height: 100, backgroundColor:'#666666'}}><Image source={this.props.enabled ? toggleOn : toggleOff} /></View>);
}
