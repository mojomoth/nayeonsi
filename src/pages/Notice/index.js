import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from 'screens/Notice';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  makeData = (data) => {
    const list = [];
    for (const key of Object.keys(data)) {
      const node = data[key];
      const date = new Date(node.time);

      const item = {
        key,
        text: node.text,
        time: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
      };

      list.push(item);
    }

    return list;
  };

  render = () => {
    const data = this.makeData(this.props.notice);

    return (
      <Notice
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
  notice: state.app.notice,
  isProgress: state.app.isProgress,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
