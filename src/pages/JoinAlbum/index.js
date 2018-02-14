import React, { Component } from 'react';
import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import MakeAlbum from 'screens/MakeAlbum';

const IMAGE_PICKER_TITLE = '프로필 사진 선택';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    picture1: null,
    picture2: null,
    picture3: null,
    picture4: null,
    picture5: null,
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => this.props.navigator.push({
    screen: 'JoinResult', 
    passProps: this.props.navigator,
  });  

  onPress1 = () => this.getImagePicker(source => this.setState({ picture1: source }));
  onPress2 = () => this.getImagePicker(source => this.setState({ picture2: source }));
  onPress3 = () => this.getImagePicker(source => this.setState({ picture3: source }));
  onPress4 = () => this.getImagePicker(source => this.setState({ picture4: source }));
  onPress5 = () => this.getImagePicker(source => this.setState({ picture5: source }));

  onDelete1 = () => this.setState({ picture1: null });
  onDelete2 = () => this.setState({ picture2: null });
  onDelete3 = () => this.setState({ picture3: null });
  onDelete4 = () => this.setState({ picture4: null });
  onDelete5 = () => this.setState({ picture5: null });

  getImagePicker = (callback) => {
    const options = {
      title: IMAGE_PICKER_TITLE,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        //
      } else if (response.error) {
        Alert.alert(IMAGE_PICKER_TITLE, `오류발생: ${response.error}`);
      } else {
        // const source = { uri: response.uri };
    
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source);
        callback(source);
      }
    });
  };

  render = () => (
    <MakeAlbum
      onBack={this.onBack}
      onPress={this.onPress}
      onPress1={this.onPress1}
      onPress2={this.onPress2}
      onPress3={this.onPress3}
      onPress4={this.onPress4}
      onPress5={this.onPress5}
      onDelete1={this.onDelete1}
      onDelete2={this.onDelete2}
      onDelete3={this.onDelete3}
      onDelete4={this.onDelete4}
      onDelete5={this.onDelete5}
      picture1={this.state.picture1}
      picture2={this.state.picture2}
      picture3={this.state.picture3}
      picture4={this.state.picture4}
      picture5={this.state.picture5}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
