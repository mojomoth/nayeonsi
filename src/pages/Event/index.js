import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from 'screens/Event';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  makeData = (data) => {
    const list = [];
    for (const key of Object.keys(data)) {
      const node = data[key];

      const item = {
        key,
        isActivated: node.isActivated,
        source: { uri: node.uri },
        link: node.link,
      };

      list.push(item);
    }

    return list;
  };

  render = () => {
    const data = this.makeData(this.props.event);

    return (
      <Event
        navigator={this.props.navigator}
        alarm={this.props.alarm}
        alarmCount={this.props.alarmCount}
        onBack={this.onBack}
        isLoading={this.props.isProgress}
        data={data}
      />
    );
  };
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  event: state.app.event,
  isProgress: state.app.isProgress,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
