import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Profile from 'screens/Profile';
import AppealPopup from 'popups/AppealPopup';
import PointUsePopup from 'popups/PointUsePopup';
import BasicPopup from 'popups/BasicPopup';
import { setPoint } from 'store/actions/user';
import { requestLikeYou, requestSecretAppeal } from 'store/actions/card';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();
  onMore = () => {};

  onCloseModal = () => this.props.navigator.dismissModal({ animationType: 'fade' });

  onSecret = () => {
    this.onCloseModal();
    this.openPointUsePopup(this.props.costs.secret, this.sendSecret);
  }

  onLike = () => {
    this.onCloseModal();
    this.openPointUsePopup(this.props.costs.like, this.sendLike);
  }

  onShop = () => this.props.navigator.push({
    screen: 'Shop', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  onMoveShop = () => {
    this.onCloseModal();
    this.onShop();
  };

  onPress = () => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <AppealPopup 
        name={this.props.nickname}
        point={this.props.point}
        likePoint={this.props.costs.like}
        onSecret={this.onSecret}
        onAppeal={this.onLike}
        onCancel={this.onCloseModal}
      />,
    },
  });

  openPointUsePopup = (usePoint, onConfiem) => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <PointUsePopup 
        point={this.props.point}
        usePoint={usePoint}
        onConfirm={onConfiem}
        onCancel={this.onCloseModal} 
      />,
    },
  });
  
  openNotEnoughPointPopup = () => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
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
    if (this.props.point < this.props.costs.secret) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - this.props.costs.secret });

    this.props.requestSecretAppeal(this.props.user.key, this.props.you);
    this.onCloseModal();
    
    Alert.alert('시크릿어필', `${this.props.nickname} 님에게 시크릿 어필했습니다!`);
  };

  sendLike = () => {
    if (this.props.point < this.props.costs.like) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - this.props.costs.like });

    this.props.requestLikeYou(this.props.user.key, this.props.you);
    this.onCloseModal();

    Alert.alert('좋아요', `${this.props.nickname} 님을 좋아합니다!`);
  };

  render = () => {
    const age = parseInt((new Date).getFullYear()) - parseInt(this.props.year) + 1;
    const info1 = `${age}세, ${this.props.tall}`;
    const info2 = `${this.props.location} / ${this.props.job}, ${this.props.school}`;
    const data1 = this.props.character.split(', ');
    const data2 = this.props.attraction.split(', ');
    const data3 = this.props.like.split(', ');
    const data4 = this.props.want.split(', ');
    const data5 = this.props.play.split(', ');

    return (
      <Profile
        images={this.props.images}
        name={this.props.nickname}
        info1={info1}
        info2={info2}
        isNearby={this.props.isLocation}
        isTop={this.props.isTop}
        message={this.props.message}
        tall={this.props.tall}
        shape={this.props.shape}
        job={this.props.job}
        school={this.props.school}
        religion={this.props.religion}
        drink={this.props.drink}
        smoke={this.props.smoke}
        blood={this.props.blood}
        data1={data1}
        data2={data2}
        data3={data3}
        data4={data4}
        data5={data5}
        onBack={this.onBack}
        onMore={this.onMore}
        onPress={this.onPress}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  point: state.user.point,
  costs: state.user.costs,
});

const mapDispatchToProps = dispatch => ({
  setPoint: data => dispatch(setPoint(data)),
  requestLikeYou: (key, you) => dispatch(requestLikeYou(key, you)),
  requestSecretAppeal: (key, you) => dispatch(requestSecretAppeal(key, you)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
