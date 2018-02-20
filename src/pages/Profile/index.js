import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Profile from 'screens/Profile';
import AppealPopup from 'popups/AppealPopup';
import { requestLikeYou, requestSecretAppeal } from 'store/actions/card';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();
  onMore = () => {};

  onCloseModal = () => this.props.navigator.dismissModal();

  onSecret = () => {
    this.props.requestSecretAppeal(this.props.user.key, this.props.you);
    this.onCloseModal();
    
    Alert.alert('시크릿어필', `${this.props.nickname} 님에게 시크릿 어필했습니다!`);
  }

  onAppeal = () => {
    this.props.requestLikeYou(this.props.user.key, this.props.you);
    this.onCloseModal();

    Alert.alert('좋아요', `${this.props.nickname} 님을 좋아합니다!`);
  }

  onPress = () => this.props.navigator.showModal({
    screen: 'Modal', 
    passProps: {
      popup: <AppealPopup 
        name={this.props.nickname}
        point={this.props.point}
        likePoint={0}
        onSecret={this.onSecret}
        onAppeal={this.onAppeal}
        onCancel={this.onCloseModal}
      />,
    },
  });

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
});

const mapDispatchToProps = dispatch => ({
  requestLikeYou: (key, you) => dispatch(requestLikeYou(key, you)),
  requestSecretAppeal: (key, you) => dispatch(requestSecretAppeal(key, you)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
