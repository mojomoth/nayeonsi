import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing, { ANIMATE_TIME } from 'screens/Landing';
import { checkAuthStateChanged, loginUser } from 'store/actions/auth';
import { getUser, getPoint, getCosts } from 'store/actions/user';
import { getCards, getHistories, requestTodayCard } from 'store/actions/card';
import { getMatches } from 'store/actions/chat';
import firebase from 'lib/firebase';
import { startMainScreen, startLandingScreen } from 'lib/navigator';

const TIME_GAP = 1000 * 60 * 60 * 4;
const database = firebase.database();

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
    console.log("uid : " + this.props.uid);
    setTimeout(this.checkAuthState, ANIMATE_TIME);
  }

  componentWillReceiveProps = (nextProps) => { 
    console.log(nextProps);
    if (nextProps.userState === 'SET_USER') {
      const { user } = nextProps;
      
      if (user === null) {
        this.moveLogin();
        this.moveJoinProfile();
        return;
      }
      
      const { key, sex } = user;
      const targetGender = sex === '남자' ? '여자' : '남자';
   
      database.ref('/cards').child(key)
        .child('today_update').once('value')
        .then((snap) => {
          const updateTime = snap.val();
          const currentTime = Date.now();

          if (updateTime === null || currentTime >= updateTime + TIME_GAP) {
            this.props.requestTodayCard(key, targetGender);
          } else {
            this.connect(key);
          }
        });
    } else if (nextProps.userState === 'FINISH_USER' && nextProps.cardState === 'RESPONSE_TODAY_CARD') {
      const { key } = this.props.user;
      this.connect(key);
    } else if (nextProps.userState === 'FINISH_POINT' && nextProps.cardState === 'FINISH_HISTORIES') {
      startMainScreen();
      this.moveMain();
    }
  };

  connect = async (key) => {
    await database.ref('costs').on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getCosts(data);
      }
    });

    await database.ref('points').child(key).on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getPoint(data);
      }
    });

    await database.ref('cards').child(key).on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getCards(data);
      }
    });

    await database.ref('likes').child(key).on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getHistories(data);
      }
    });
    
    await database.ref('matches').child(key).on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getMatches(data);
      }
    });
  };

  checkAuthState = () => {
    this.props.checkAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.loginUser(user);
        this.props.getUser(user.uid);
      } else {
        this.moveLogin();
      }
    });
  };

  moveMain = () => this.props.navigator.switchToTab({
    tabIndex: 1,
  });

  moveLogin = () => this.props.navigator.push({
    screen: 'Login', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  moveJoinProfile = () => this.props.navigator.push({
    screen: 'JoinProfile', 
    passProps: this.props.navigator,
  });

  render = () => (
    <Landing 
      ref={(ref) => { this.landing = ref; }} 
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  user: state.user.user,
  userState: state.user.state,
  cardState: state.card.state,
  isProgress: state.user.isProgress,
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  checkAuthStateChanged: callback => dispatch(checkAuthStateChanged(callback)),
  getUser: uid => dispatch(getUser(uid)),
  getCosts: data => dispatch(getCosts(data)),
  getPoint: data => dispatch(getPoint(data)),
  getCards: data => dispatch(getCards(data)),
  getHistories: data => dispatch(getHistories(data)),
  getMatches: data => dispatch(getMatches(data)),
  requestTodayCard: (key, targetGender) => dispatch(requestTodayCard(key, targetGender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
