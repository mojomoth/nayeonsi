import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from 'screens/Main';
import TypeSearchPopup from 'popups/TypeSearchPopup';
import PointUsePopup from 'popups/PointUsePopup';
import BasicPopup from 'popups/BasicPopup';
import { setPoint } from 'store/actions/user';
import { getAttractions, requestTypeCard } from 'store/actions/card';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isLoading: false,
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.cardState === 'SET_ATTRACTIONS') {
      
      const data = [];
      for (const attraction of nextProps.attractions) {
        data.push({ key: attraction, selected: false });
      }

      this.props.navigator.showModal({
        screen: 'Modal', 
        animationType: 'fade',
        passProps: {
          popup: <TypeSearchPopup 
            onPress={this.openUsePoint}
            onClose={this.onCloseModal} 
            data={data} 
          />,
        },
      });
    }
  };

  onFind = (data) => {
    if (this.props.point < this.props.costs.find) {
      this.onCloseModal();
      this.openNotEnoughPointPopup();
      return;
    }

    // set to client
    this.props.setPoint({ point: this.props.point - this.props.costs.find });

    const targetGender = this.props.user.sex === '남자' ? '여자' : '남자';
    this.props.requestTypeCard(this.props.user.key, data.key, targetGender);

    // close
    this.onCloseModal();
  };

  onPress = (data) => {
    this.props.navigator.push({
      screen: 'Profile', 
      passProps: {
        ...data,
        you: data.key,
      },
    }); 
  };

  onPlus = () => this.props.getAttractions();

  onShop = () => this.props.navigator.push({
    screen: 'Shop', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });
  
  onCloseModal = () => this.props.navigator.dismissModal({ animationType: 'fade' });

  onMoveShop = () => {
    this.onCloseModal();
    this.onShop();
  };

  openUsePoint = (data) => {
    // close
    this.onCloseModal();

    // open
    this.openPointUsePopup(data);
  };

  openPointUsePopup = data => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <PointUsePopup 
        point={this.props.point}
        usePoint={this.props.costs.find}
        onConfirm={() => this.onFind(data)}
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

  render = () => (
    <Main
      navigator={this.props.navigator}
      data={this.props.cards}
      point={this.props.point}
      alarm={this.props.alarm}
      onPress={this.onPress}
      onPlus={this.onPlus}
      onAlarm={this.onAlarm}
      onPoint={this.onShop}
      isLoading={this.props.isProgress || this.state.isLoading}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  costs: state.app.costs,
  cards: state.card.cards,
  attractions: state.card.attractions,
  isProgress: state.card.isProgress,
  cardState: state.card.state,
});

const mapDispatchToProps = dispatch => ({
  setPoint: data => dispatch(setPoint(data)),
  getAttractions: () => dispatch(getAttractions()),
  requestTypeCard: (key, type, targetGender) => dispatch(requestTypeCard(key, type, targetGender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
