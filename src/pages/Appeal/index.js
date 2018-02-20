import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Appeal from 'screens/Appeal';
import { 
  requestLocationAppeal,
  requestLocationSecretAppeal,
  requestLocationLikeYou, 
} from 'store/actions/card';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    location: '대한민국(전체)',
    count: 0,
  };

  componentDidMount = () => {
    this.setState({ count: this.randomRange(10, 30) });
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.cardState === 'RESPONSE_LOCATION_SECRET_APPEAL') {
      Alert.alert('내 주면 어필', `${this.state.count}명에게 시크릿어필을 보냈습니다.`);
    }

    if (nextProps.cardState === 'RESPONSE_LOCATION_APPEAL') {
      Alert.alert('내 주면 어필', `${this.state.count}명에게 어필을 보냈습니다.`);
    }

    if (nextProps.cardState === 'RESPONSE_LOCATION_LIKE') {
      Alert.alert('내 주면 어필', `${this.state.count}명에게 좋아요를 보냈습니다.`);
    }
  };

  onSecret = () => this.props.requestLocationSecretAppeal(
    this.props.user.key,
    this.state.location,
    this.props.user.sex === '남자' ? '여자' : '남자',
    this.state.count,
  );

  onAppeal = () => this.props.requestLocationAppeal(
    this.props.user.key,
    this.state.location,
    this.props.user.sex === '남자' ? '여자' : '남자',
    this.state.count,
  );

  onLike = () => this.props.requestLocationLikeYou(
    this.props.user.key,
    this.state.location,
    this.props.user.sex === '남자' ? '여자' : '남자',
    this.state.count,
  );

  onAbout = () => Alert.alert('내 주변 어필', 'GPS를 이용해 무작위로 가까운 사람을 선택하여 내 프로필을 전송합니다.');

  randomRange = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  render = () => (
    <Appeal
      navigator={this.props.navigator}
      point={this.props.point}
      alarm={this.props.alarm}
      isLoading={this.props.isProgress}
      location={this.state.location}
      userCount={this.state.count}
      secretButton={`${this.state.count}명에게 시크릿 어핏`}
      appealButton={`${this.state.count}명에게 어필`}
      likeButton={`${this.state.count}명에게 좋아요`}
      onSecret={this.onSecret}
      onAppeal={this.onAppeal}
      onLike={this.onLike}
      onAbout={this.onAbout}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  isProgress: state.card.isProgress,
  cardState: state.card.state,
});

const mapDispatchToProps = dispatch => ({
  requestLocationAppeal: (key, location, targetGender, count) => dispatch(requestLocationAppeal(key, location, targetGender, count)),
  requestLocationSecretAppeal: (key, location, targetGender, count) => dispatch(requestLocationSecretAppeal(key, location, targetGender, count)),
  requestLocationLikeYou: (key, location, targetGender, count) => dispatch(requestLocationLikeYou(key, location, targetGender, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
