import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Landing, { ANIMATE_TIME } from 'screens/Landing';
import { getUser } from 'store/actions/user';
import { getTodayCard } from 'store/actions/card';
import firebase from 'lib/firebase';

const TIME_GAP = 1000 * 60 * 60;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount = () => {
    this.landing.fade(1, ANIMATE_TIME);
console.log(this.props.uid);
    setTimeout(this.complete, ANIMATE_TIME, this.props.uid);
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.state === 'SET_USER') {
      this.moveMain();

      const database = firebase.database();
      const { key, sex } = nextProps.user;

      database.ref('/cards').child(key)
        .child('today_update').once('value')
        .then((snap) => {
          const updateTime = snap.val();
          const currentTime = Date.now();

          if (updateTime === null || currentTime >= updateTime + TIME_GAP) {
            Alert.alert("요청!");
            const targetGender = sex === '남자' ? '여자' : '남자';
            this.props.getTodayCard(key, targetGender);
          }
        });
    }
  };

  complete = isUid => (
    isUid ? this.mainAction() : this.moveLogin()
  );

  mainAction = async () => {
    this.props.getUser(this.props.uid);
  };

  moveMain = () => this.props.navigator.switchToTab({
    tabIndex: 1,
  });

  moveLogin = () => this.props.navigator.push({
    screen: 'Login', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  render = () => (
    <Landing 
      ref={(ref) => { this.landing = ref; }} 
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  user: state.user.user,
  state: state.user.state,
});

const mapDispatchToProps = dispatch => ({
  getUser: uid => dispatch(getUser(uid)),
  getTodayCard: (key, targetGender) => dispatch(getTodayCard(key, targetGender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
