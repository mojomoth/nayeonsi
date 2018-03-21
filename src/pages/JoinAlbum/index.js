import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import MakeAlbum from 'screens/MakeAlbum';
import BasicPopup from 'popups/BasicPopup';
import firebase from 'lib/firebase';
import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

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
    picture6: null,
    isLoading: false,
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    const isValid = this.state.picture1 !== null
      && this.state.picture2 !== null
      && this.state.picture3 !== null;

    if (!isValid) {
      this.openPopup('회원가입', '필수 사진을 올려주세요.');
      return;
    }

    this.join();
  }

  onPress1 = () => this.getImagePicker(source => this.setState({ picture1: source }));
  onPress2 = () => this.getImagePicker(source => this.setState({ picture2: source }));
  onPress3 = () => this.getImagePicker(source => this.setState({ picture3: source }));
  onPress4 = () => this.getImagePicker(source => this.setState({ picture4: source }));
  onPress5 = () => this.getImagePicker(source => this.setState({ picture5: source }));
  onPress6 = () => this.getImagePicker(source => this.setState({ picture6: source }));

  onDelete1 = () => this.setState({ picture1: null });
  onDelete2 = () => this.setState({ picture2: null });
  onDelete3 = () => this.setState({ picture3: null });
  onDelete4 = () => this.setState({ picture4: null });
  onDelete5 = () => this.setState({ picture5: null });
  onDelete6 = () => this.setState({ picture6: null });

  onCloseModal = () => {
    this.props.navigator.dismissModal({ animationType: 'fade' });
  };

  getImagePicker = (callback) => {
    ImagePicker.openPicker({
      includeBase64: true,
    }).then((image) => {
      const source = { uri: `data:image/jpeg;base64,${image.data}` };
      callback(source);
    });
  };

  openPopup = (title, text) => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <BasicPopup 
        title={title}
        text={text}
        buttonText="확인"
        onPress={this.onCloseModal}
      />,
    },
  });

  join = async () => {
    const data = {
      nickname: this.props.nickname,
      year: this.props.year,
      sex: this.props.sex,
      tall: this.props.tall,
      shape: this.props.shape,
      blood: this.props.blood,
      religion: this.props.religion,
      smoke: this.props.smoke,
      drink: this.props.drink,
      phone: this.props.phone,
      location: this.props.location,
      school: this.props.school,
      job: this.props.job,
      attraction: this.props.attraction,
      character: this.props.character,
      like: this.props.like,
      want: this.props.want,
      play: this.props.play,
      message: this.props.message,
      images: null,
    };

    this.setState({ isLoading: true });
    
    data.images = await this.uploads();

    await this.write(data);

    this.setState({ isLoading: false });

    this.nextResult();
  };

  write = async (data) => {
    const { uid } = this.props;

    const key = await firebase.database().ref('users').push().key;
    await firebase.database().ref('user_links').child(uid).set(key);
    await this.joinUser(key, data);
  };

  joinUser = async (key, data) => {
    await firebase.database().ref('users').child(key).set(data);
    await firebase.database().ref('nicknames').child(data.nickname).set({ key });
    await firebase.database().ref('genders').child(data.sex).child(key).set(true);
    await firebase.database().ref('locations').child(data.location).child(data.sex).child(key).set(true);
    
    for (const item of data.attraction.split(', ')) {
      await firebase.database().ref('gender_attractions').child(data.sex).child(item).set(true);
      await firebase.database().ref('attractions').child(item).child(data.sex).child(key).set(true);
    }
  };

  uploads = async () => {
    const data = [];

    if (this.state.picture1) {
      const url = await this.uploadImage(this.state.picture1.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    if (this.state.picture2) {
      const url = await this.uploadImage(this.state.picture2.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    if (this.state.picture3) {
      const url = await this.uploadImage(this.state.picture3.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    if (this.state.picture4) {
      const url = await this.uploadImage(this.state.picture4.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    if (this.state.picture5) {
      const url = await this.uploadImage(this.state.picture5.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    if (this.state.picture6) {
      const url = await this.uploadImage(this.state.picture6.uri.split(',')[1], 'image/jpeg');
      data.push(url);
    }

    return data;
  };

  uploadImage = (data, mime = 'application/octet-stream') => new Promise((resolve, reject) => {
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('images').child(this.props.uid).child(`${sessionId}`);

    Blob.build(data, { type: `${mime};BASE64` })
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      });
  });

  nextResult = () => this.props.navigator.push({
    screen: 'JoinResult', 
    passProps: this.props.navigator,
  });  

  render = () => (
    <MakeAlbum
      onBack={this.onBack}
      onPress={this.onPress}
      onPress1={this.onPress1}
      onPress2={this.onPress2}
      onPress3={this.onPress3}
      onPress4={this.onPress4}
      onPress5={this.onPress5}
      onPress6={this.onPress6}
      onDelete1={this.onDelete1}
      onDelete2={this.onDelete2}
      onDelete3={this.onDelete3}
      onDelete4={this.onDelete4}
      onDelete5={this.onDelete5}
      onDelete6={this.onDelete6}
      picture1={this.state.picture1}
      picture2={this.state.picture2}
      picture3={this.state.picture3}
      picture4={this.state.picture4}
      picture5={this.state.picture5}
      picture6={this.state.picture6}
      isLoading={this.state.isLoading}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
