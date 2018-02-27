import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Appeal from 'screens/Appeal';
import PointUsePopup from 'popups/PointUsePopup';
import BasicPopup from 'popups/BasicPopup';
import { 
  requestLocationAppeal,
  requestLocationSecretAppeal,
  requestLocationLikeYou, 
} from 'store/actions/card';
import { setPoint } from 'store/actions/user';

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

  onSecret = () => 
    this.openPointUsePopup(this.calculateCost(this.props.costs.location_secret), this.sendSecret);

  onAppeal = () => 
    this.openPointUsePopup(this.calculateCost(this.props.costs.location_appeal), this.sendAppeal);

  onLike = () => 
    this.openPointUsePopup(this.calculateCost(this.props.costs.location_secret), this.sendLike);

  onAbout = () => Alert.alert('내 주변 어필', 'GPS를 이용해 무작위로 가까운 사람을 선택하여 내 프로필을 전송합니다.');

  onShop = () => this.props.navigator.push({
    screen: 'Shop', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  onMoveShop = () => {
    this.onCloseModal();
    this.onShop();
  };

  onCloseModal = () => this.props.navigator.dismissModal();

  calculateCost = cost => (cost * this.state.count);

  openPointUsePopup = (usePoint, onConfirm) => this.props.navigator.showModal({
    screen: 'Modal', 
    passProps: {
      popup: <PointUsePopup 
        point={this.props.point}
        usePoint={usePoint}
        onConfirm={onConfirm}
        onCancel={this.onCloseModal} 
      />,
    },
  });
  
  openNotEnoughPointPopup = () => this.props.navigator.showModal({
    screen: 'Modal', 
    passProps: {
      popup: <BasicPopup 
        title="포인트가 부족합니다."
        text="상점으로 이동해서 포인트를 충전해주세요."
        buttonText="상점으로 이동"
        onPress={this.onMoveShop}
      />,
    },
  });

  sendSecret = () => {
    const cost = this.calculateCost(this.props.costs.location_secret);

    if (this.props.point < cost) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - cost });
    
    this.props.requestLocationSecretAppeal(
      this.props.user.key,
      this.state.location,
      this.props.user.sex === '남자' ? '여자' : '남자',
      this.state.count,
    );

    this.onCloseModal();
  }

  sendAppeal = () => {
    const cost = this.calculateCost(this.props.costs.location_appeal);

    if (this.props.point < cost) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - cost });

    this.props.requestLocationAppeal(
      this.props.user.key,
      this.state.location,
      this.props.user.sex === '남자' ? '여자' : '남자',
      this.state.count,
    );
    
    this.onCloseModal();
  }

  sendLike = () => {
    const cost = this.calculateCost(this.props.costs.location_like);

    if (this.props.point < cost) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - cost });

    this.props.requestLocationLikeYou(
      this.props.user.key,
      this.state.location,
      this.props.user.sex === '남자' ? '여자' : '남자',
      this.state.count,
    );
    
    this.onCloseModal();
  }

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
      onPoint={this.onShop}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  costs: state.user.costs,
  isProgress: state.card.isProgress,
  cardState: state.card.state,
});

const mapDispatchToProps = dispatch => ({
  setPoint: data => dispatch(setPoint(data)),
  requestLocationAppeal: (key, location, targetGender, count) => 
    dispatch(requestLocationAppeal(key, location, targetGender, count)),
  requestLocationSecretAppeal: (key, location, targetGender, count) => 
    dispatch(requestLocationSecretAppeal(key, location, targetGender, count)),
  requestLocationLikeYou: (key, location, targetGender, count) => 
    dispatch(requestLocationLikeYou(key, location, targetGender, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
