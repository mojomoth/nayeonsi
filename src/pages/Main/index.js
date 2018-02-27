import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from 'screens/Main';
import TypeSearchPopup from 'popups/TypeSearchPopup';
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
        passProps: {
          popup: <TypeSearchPopup 
            onPress={this.onSearch}
            onClose={this.onCloseModal} 
            data={data} 
          />,
        },
      });
    }
  };

  onSearch = (data) => {
    const targetGender = this.props.user.sex === '남자' ? '여자' : '남자';
    this.props.requestTypeCard(this.props.user.key, data.key, targetGender);

    // close
    this.onCloseModal();
  }

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
  
  onCloseModal = () => this.props.navigator.dismissModal();

  render = () => (
    <Main
      navigator={this.props.navigator}
      data={this.props.cards}
      point={this.props.point}
      alarm={this.props.alarm}
      onPress={this.onPress}
      onPlus={this.onPlus}
      isLoading={this.props.isProgress || this.state.isLoading}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  cards: state.card.cards,
  attractions: state.card.attractions,
  isProgress: state.card.isProgress,
  cardState: state.card.state,
});

const mapDispatchToProps = dispatch => ({
  getAttractions: () => dispatch(getAttractions()),
  requestTypeCard: (key, type, targetGender) => dispatch(requestTypeCard(key, type, targetGender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
