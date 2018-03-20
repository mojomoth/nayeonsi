import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import HeartLockIcon from 'icons/HeartLock';
import styles from './styles';

export default class Article extends Component {
  render = () => (
    <Button style={styles.article} onPress={this.props.onPress}>
      <Image 
        style={styles.image}
        resizeMode="cover"
        resizeMethod="resize"
        source={this.props.source}
      />
      { this.props.isActivated === false ?
        <View style={styles.end}>
          <View style={styles.endBack} />
          <HeartLockIcon style={styles.lockIcon} />
          <Label style={styles.endLabel} text={'종료된 이벤트 입니다.'} />
        </View>
        : null
      }
    </Button>
  );
}

Article.defaultProps = {
};

Article.propTypes = {
};
