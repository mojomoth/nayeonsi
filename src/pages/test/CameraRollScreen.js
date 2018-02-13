import React, { Component } from 'react';
import { View, Text, Button, CameraRoll, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { fetchTest } from '../../store/actions';

class CameraRollScreen extends Component {
  state = {
    modalVisible: false,
    photos: [],
    index: null,
    avatarSource: null,
  };

  getImagePicker = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      Alert.alert('ImagePicker', `Response = ${response}`);
    
      if (response.didCancel) {
        Alert.alert('ImagePicker', 'User cancelled image picker');
      } else if (response.error) {
        Alert.alert('ImagePicker', `ImagePicker Error: ${response.error}`);
      } else if (response.customButton) {
        Alert.alert('ImagePicker', `User tapped custom button: ${response.customButton}`);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  getGPS = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = Math.abs(position.coords.latitude);
      let longitude = Math.abs(position.coords.longitude);
      Alert.alert("GPS", `latitude: ${latitude}\nlongitude: ${longitude}\n`);
  }, error => {
      Alert.alert("GPS", "GPS를 켜서 위치의 정확도를 개선해주세요.");
  }
);   

  };

  getPhotos = () => {
    // Alert.alert('aa');
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    })
    .then(r => this.setState({ photos: r.edges }));
  };

  render = () => {
    return (
      <View>
        <Text>First Tab</Text>
        <Text>{process.env.NODE_ENV}</Text>
        <Text>{this.props.test}</Text>
        <Button title="store test" onPress={this.props.fetchTest} />
        <Button title="photo test" onPress={() => this.getPhotos()} />
        <Button title="imagePicker test" onPress={() => this.getImagePicker()} />
        <Button title="gps test" onPress={() => this.getGPS()} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => ({
  fetchTest: () => dispatch(fetchTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen);
