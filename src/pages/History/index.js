import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from 'screens/History';
import { setHistories, removeHistory } from 'store/actions/card';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isRemoveLikeMe: false,
    isRemoveLikeYou: false,
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

  onDelete = (data, category) => {
    const cards = { 
      you: this.props.likeYou,
      me: this.props.likeMe,
    };

    const list = cards[category];
    for (const item of list) {
      if (item.key === data.key) {
        const index = list.indexOf(item);
        list.splice(index, 1);
        break;
      }
    }
  
    // remove to client
    this.props.setHistories(cards);

    // remove to firebase
    this.props.removeHistory(this.props.user.key, category, data.key);
  };

  onRemoveLikeMe = () => this.setState({ isRemoveLikeMe: !this.state.isRemoveLikeMe });
  onRemoveLikeYou = () => this.setState({ isRemoveLikeYou: !this.state.isRemoveLikeYou });

  onShop = () => this.props.navigator.push({
    screen: 'Shop', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  render = () => (
    <History
      navigator={this.props.navigator}
      likeYou={this.props.likeYou}
      likeMe={this.props.likeMe}
      point={this.props.point}
      alarm={this.props.alarm}
      isRemoveLikeMe={this.state.isRemoveLikeMe}
      isRemoveLikeYou={this.state.isRemoveLikeYou}
      onRemoveLikeMe={this.onRemoveLikeMe}
      onRemoveLikeYou={this.onRemoveLikeYou}
      onPress={this.onPress}
      onDelete={this.onDelete}
      onPoint={this.onShop}
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  likeYou: state.card.likeYou,
  likeMe: state.card.likeMe,
  isProgress: state.card.isProgress,
  cardState: state.card.state,
});

const mapDispatchToProps = dispatch => ({
  setHistories: data => dispatch(setHistories(data)),
  removeHistory: (key, category, cardKey) => dispatch(removeHistory(key, category, cardKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
