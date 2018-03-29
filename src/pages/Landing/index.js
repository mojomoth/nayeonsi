import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing, { ANIMATE_TIME } from 'screens/Landing';
import { checkAuthStateChanged, loginUser } from 'store/actions/auth';
import { getCosts, getNotice, getEvent, getSetting, setAlarm } from 'store/actions/app';
import { getUser, getPoint, finishPoint } from 'store/actions/user';
import { getCards, finishCards, getHistories, requestTodayCard } from 'store/actions/card';
import { getMatches } from 'store/actions/chat';
import firebase from 'lib/firebase';
import { startMainScreen, startLandingScreen } from 'lib/navigator';
import { 
  subscribe, 
  subscribeToday,
  subscribeLike,
  subscribeAppeal,
  subscribeMatch,
  subscribeMessage,
  registerListener,
} from 'lib/fcm';

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

      // push notification
      subscribe(key);
   
      database.ref('/cards').child(key)
        .child('today_update').once('value')
        .then((snap) => {
          const updateTime = snap.val();
          const currentTime = Date.now();

          if (updateTime === null || currentTime >= updateTime + TIME_GAP) {
            this.props.requestTodayCard(key, targetGender);
          } else {
            this.asyncDefault(key);
          }
        });
    } else if (nextProps.userState === 'FINISH_USER' && nextProps.cardState === 'RESPONSE_TODAY_CARD') {
      const { key } = this.props.user;
      this.asyncDefault(key);
    } else if (nextProps.userState === 'FINISH_POINT' && nextProps.cardState === 'FINISH_CARDS') {
      const { key } = this.props.user;
      this.props.getSetting(key);

      this.asyncData(key);

      startMainScreen();
      this.moveMain();
    } if (nextProps.appState === 'FINISH_SETTING') {
      const { key } = this.props.user;
      if (this.props.isTodayNoti) subscribeToday(key);
      if (this.props.isLikeNoti) subscribeLike(key);
      if (this.props.isAppealNoti) subscribeAppeal(key);
      if (this.props.isMatchNoti) subscribeMatch(key);
      if (this.props.isMessageNoti) subscribeMessage(key);
    }
  };

  asyncDefault = async (key) => {
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
      } else {
        this.props.finishPoint();
      }
    });

    await database.ref('cards').child(key).on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getCards(data);
      } else {
        this.props.finishCards();
      }
    });
  };

  asyncData = async (key) => {
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
    
    await database.ref('notice').on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getNotice(data);
      }
    });
    
    await database.ref('event').on('value', (snap) => {
      const data = snap.val();
      if (data !== null) {
        this.props.getEvent(data);
      }
    });
  };

  pushAction = (data) => {
    console.log(data);
    if (data.message && data.priority && data.priority === 'high') {
      this.props.setAlarm(data.message);
    }
  };

  pushMove = (screen) => {

  };

  checkAuthState = () => {
    this.props.checkAuthStateChanged((user) => {
      
      if (user) {
        this.props.loginUser(user);
        this.props.getUser(user.uid);
        registerListener(this.pushAction, this.pushMove);
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
  appState: state.app.state,
  isProgress: state.user.isProgress,
  isTodayNoti: state.app.isTodayNoti,
  isLikeNoti: state.app.isLikeNoti,
  isAppealNoti: state.app.isAppealNoti,
  isMatchNoti: state.app.isMatchNoti,
  isMessageNoti: state.app.isMessageNoti,
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  checkAuthStateChanged: callback => dispatch(checkAuthStateChanged(callback)),
  getUser: uid => dispatch(getUser(uid)),
  getCosts: data => dispatch(getCosts(data)),
  getPoint: data => dispatch(getPoint(data)),
  finishPoint: data => dispatch(finishPoint(data)),
  getCards: data => dispatch(getCards(data)),
  finishCards: data => dispatch(finishCards(data)),
  getHistories: data => dispatch(getHistories(data)),
  getMatches: data => dispatch(getMatches(data)),
  getNotice: data => dispatch(getNotice(data)),
  getEvent: data => dispatch(getEvent(data)),
  getSetting: key => dispatch(getSetting(key)),
  requestTodayCard: (key, targetGender) => dispatch(requestTodayCard(key, targetGender)),
  setAlarm: text => dispatch(setAlarm(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
