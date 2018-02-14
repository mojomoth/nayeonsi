import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmailJoin from 'screens/EmailJoin';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => this.props.navigator.push({
    screen: 'JoinProfile', 
    passProps: this.props.navigator,
  });  

  render = () => (
    <EmailJoin 
      onBack={this.onBack}
      onPress={this.onPress}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
