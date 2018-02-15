import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Landing, { ANIMATE_TIME } from 'screens/Landing';
import { checkAuthStateChanged, loginUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount = () => {
    // this.landing.fade(1, ANIMATE_TIME);

    this.complete(this.props.user);
  };

  complete = isUser => (
    isUser ? this.moveMain() : this.moveLogin()
  );

  moveMain = () => this.props.navigator.switchToTab({
    tabIndex: 1,
  });

  moveLogin = () => this.props.navigator.push({
    screen: 'Login', 
    passProps: this.props.navigator,
  });

  render = () => (
    <Landing 
      ref={(ref) => { this.landing = ref; }} 
    />
  );
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
