import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import ProfileSetting from 'screens/ProfileSetting';
import BasicPopup from 'popups/BasicPopup';
import SelectPopup from 'popups/SelectPopup';
import ItemSelectPopup from 'popups/ItemSelectPopup';
import firebase from 'lib/firebase';
import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const MIN_NICKNAME = 4;
const MIN_PHONE = 10;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isModifying: false,
    nickname: { 
      isFocus: false, isComplete: true, text: this.props.user.nickname,
    },
    year: { 
      isFocus: false, isComplete: true, text: this.props.user.year,
    },
    sex: { 
      isFocus: false, isComplete: true, text: this.props.user.sex,
    },
    tall: { 
      isFocus: false, isComplete: true, text: this.props.user.tall,
    },
    shape: { 
      isFocus: false, isComplete: true, text: this.props.user.shape,
    },
    blood: { 
      isFocus: false, isComplete: true, text: this.props.user.blood,
    },
    religion: { 
      isFocus: false, isComplete: true, text: this.props.user.religion,
    },
    smoke: { 
      isFocus: false, isComplete: true, text: this.props.user.smoke,
    },
    drink: { 
      isFocus: false, isComplete: true, text: this.props.user.drink,
    },
    phone: { 
      isFocus: false, isComplete: true, text: this.props.user.phone,
    },
    location: { 
      isFocus: false, isComplete: true, text: this.props.user.location,
    },
    school: { 
      isFocus: false, isComplete: true, text: this.props.user.school,
    },
    job: { 
      isFocus: false, isComplete: true, text: this.props.user.job,
    },
    attraction: { 
      isFocus: false, isComplete: true, text: this.props.user.attraction,
    },
    character: { 
      isFocus: false, isComplete: true, text: this.props.user.character,
    },
    like: { 
      isFocus: false, isComplete: true, text: this.props.user.like,
    },
    want: { 
      isFocus: false, isComplete: true, text: this.props.user.want,
    },
    play: { 
      isFocus: false, isComplete: true, text: this.props.user.play,
    },
    message: { 
      isFocus: false, isComplete: true, text: this.props.user.message,
    },
    picture1: this.props.user.images.length > 0 ? { uri: this.props.user.images[0] } : null,
    picture2: this.props.user.images.length > 1 ? { uri: this.props.user.images[1] } : null,
    picture3: this.props.user.images.length > 2 ? { uri: this.props.user.images[2] } : null,
    picture4: this.props.user.images.length > 3 ? { uri: this.props.user.images[3] } : null,
    picture5: this.props.user.images.length > 4 ? { uri: this.props.user.images[4] } : null,
    picture6: this.props.user.images.length > 5 ? { uri: this.props.user.images[5] } : null,
    isLoading: false,
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    const isPictureValid = this.state.picture1 !== null
    && this.state.picture2 !== null
    && this.state.picture3 !== null;

    let isValid = isPictureValid;

    isValid = this.state.nickname.isComplete 
      && this.state.year.isComplete
      && this.state.sex.isComplete
      && this.state.tall.isComplete
      && this.state.shape.isComplete
      && this.state.blood.isComplete
      && this.state.religion.isComplete
      && this.state.smoke.isComplete
      && this.state.drink.isComplete
      && this.state.phone.isComplete;

    isValid = this.state.location.isComplete 
      && this.state.school.isComplete
      && this.state.job.isComplete
      && this.state.attraction.isComplete
      && this.state.character.isComplete
      && this.state.like.isComplete
      && this.state.want.isComplete
      && this.state.play.isComplete;

    if (!isValid) {
      if (this.state.nickname.isComplete === false) {
        this.openPopup('회원가입', `닉네임을 ${MIN_NICKNAME}글자 이상 입력하세요`);
      } else if (this.state.phone.isComplete === false) {
        this.openPopup('회원가입', `연락처를 ${MIN_PHONE}글자 이상 입력하세요`);
      } else if (isPictureValid === false) {
        this.openPopup('회원가입', '필수 사진을 올려주세요.');
      } else {
        this.openPopup('회원가입', '프로필을 완성해주세요.');
      }
      
      return;
    }

    this.modify();
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

  onNicknameChange = (text) => { 
    const isComplete = text.length >= MIN_NICKNAME;

    this.setState({
      nickname: {
        ...this.state.nickname,
        text,
        isComplete,
      },
    });
  };
    
  onNicknameFocus = () => 
    this.setState({ 
      nickname: {
        ...this.state.nickname,
        isFocus: true,
      },
    });
    
  onNicknameBlur = () => 
    this.setState({ 
      nickname: {
        ...this.state.nickname,
        isFocus: false,
      },
    });
  
  onPhoneChange = (text) => { 
    const isComplete = text.length >= MIN_PHONE;

    this.setState({
      phone: {
        ...this.state.phone,
        text,
        isComplete,
      },
    });
  };
    
  onPhoneFocus = () => 
    this.setState({ 
      phone: {
        ...this.state.phone,
        isFocus: true,
      },
    });
    
  onPhoneBlur = () => 
    this.setState({ 
      phone: {
        ...this.state.phone,
        isFocus: false,
      },
    });
    
  onYearBlur = () => 
    this.setState({ 
      year: {
        ...this.state.year,
        isFocus: false,
      },
    });
    
  onYearFocus = () => {
    this.setState({ 
      year: {
        ...this.state.year,
        isFocus: true,
      },
    });

    const years = [];
    for (let y = 1970; y < 2000; y++) {
      const isSelected = y.toString() === this.state.year.text;
      years.push({ key: y.toString(), selected: isSelected });
    }

    // const isCloseButton = this.state.year.text !== null;
    this.openSelectPopup('태어난연도', years, this.onSelectedYear, 239);
  }

  onSelectedYear = (item) => {
    this.setState({ 
      year: {
        ...this.state.year,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onSexBlur = () => 
    this.setState({ 
      sex: {
        ...this.state.sex,
        isFocus: false,
      },
    });
    
  onSexFocus = () => {
    this.setState({ 
      sex: {
        ...this.state.sex,
        isFocus: true,
      },
    });

    const data = [
      { key: '남자', selected: this.state.sex.text === '남자' },
      { key: '여자', selected: this.state.sex.text === '여자' }];

    this.openSelectPopup('성별', data, this.onSelectedSex, 120);
  }

  onSelectedSex = (item) => {
    this.setState({ 
      sex: {
        ...this.state.sex,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onTallBlur = () => 
    this.setState({ 
      tall: {
        ...this.state.tall,
        isFocus: false,
      },
    });
    
  onTallFocus = () => {
    this.setState({ 
      tall: {
        ...this.state.tall,
        isFocus: true,
      },
    });

    const data = [];
    for (let t = 150; t < 195; t++) {
      const value = `${t}cm`;
      const isSelected = value === this.state.tall.text;
      data.push({ key: value, selected: isSelected });
    }

    this.openSelectPopup('키', data, this.onSelectedTall, 339);
  }

  onSelectedTall = (item) => {
    this.setState({ 
      tall: {
        ...this.state.tall,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onShapeBlur = () => 
    this.setState({ 
      shape: {
        ...this.state.shape,
        isFocus: false,
      },
    });
    
  onShapeFocus = () => {
    this.setState({ 
      shape: {
        ...this.state.shape,
        isFocus: true,
      },
    });

    const data = [
      { key: '마른', selected: this.state.shape.text === '마른' },
      { key: '탄탄', selected: this.state.shape.text === '탄탄' },
      { key: '귀여운', selected: this.state.shape.text === '귀여운' },
      { key: '섹시한', selected: this.state.shape.text === '섹시한' },
      { key: '보통', selected: this.state.shape.text === '보통' },
      { key: '건강', selected: this.state.shape.text === '건강' }];

    this.openSelectPopup('체형', data, this.onSelectedShape, 239);
  }

  onSelectedShape = (item) => {
    this.setState({ 
      shape: {
        ...this.state.shape,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onBloodBlur = () => 
    this.setState({ 
      blood: {
        ...this.state.blood,
        isFocus: false,
      },
    });
    
  onBloodFocus = () => {
    this.setState({ 
      blood: {
        ...this.state.blood,
        isFocus: true,
      },
    });

    const data = [
      { key: 'A', selected: this.state.blood.text === 'A' },
      { key: 'B', selected: this.state.blood.text === 'B' },
      { key: 'AB', selected: this.state.blood.text === 'AB' },
      { key: 'O', selected: this.state.blood.text === 'O' }];

    this.openSelectPopup('혈액형', data, this.onSelectedBlood, 239);
  }

  onSelectedBlood = (item) => {
    this.setState({ 
      blood: {
        ...this.state.blood,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onReligionBlur = () => 
    this.setState({ 
      religion: {
        ...this.state.religion,
        isFocus: false,
      },
    });
    
  onReligionFocus = () => {
    this.setState({ 
      religion: {
        ...this.state.religion,
        isFocus: true,
      },
    });

    const data = [
      { key: '없음', selected: this.state.religion.text === '없음' },
      { key: '불교', selected: this.state.religion.text === '불교' },
      { key: '기독교', selected: this.state.religion.text === '기독교' },
      { key: '천주교', selected: this.state.religion.text === '천주교' },
      { key: '이슬람교', selected: this.state.religion.text === '이슬람교' },
      { key: '흰두교', selected: this.state.religion.text === '흰두교' },
      { key: '원불교', selected: this.state.religion.text === '원불교' }];

    this.openSelectPopup('종교', data, this.onSelectedReligion, 239);
  }

  onSelectedReligion = (item) => {
    this.setState({ 
      religion: {
        ...this.state.religion,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onSmokeBlur = () => 
    this.setState({ 
      smoke: {
        ...this.state.smoke,
        isFocus: false,
      },
    });
    
  onSmokeFocus = () => {
    this.setState({ 
      smoke: {
        ...this.state.smoke,
        isFocus: true,
      },
    });

    const data = [
      { key: '비흡연자', selected: this.state.smoke.text === '비흡연자' },
      { key: '생각날때 피는정도', selected: this.state.smoke.text === '생각날때 피는정도' },
      { key: '하루한갑', selected: this.state.smoke.text === '하루한갑' },
      { key: '애연가', selected: this.state.smoke.text === '애연가' }];

    this.openSelectPopup('흡연', data, this.onSelectedSmoke, 239);
  }

  onSelectedSmoke = (item) => {
    this.setState({ 
      smoke: {
        ...this.state.smoke,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onDrinkBlur = () => 
    this.setState({ 
      drink: {
        ...this.state.drink,
        isFocus: false,
      },
    });
    
  onDrinkFocus = () => {
    this.setState({ 
      drink: {
        ...this.state.drink,
        isFocus: true,
      },
    });

    const data = [
      { key: '못함', selected: this.state.drink.text === '못함' },
      { key: '가끔 마시는 편', selected: this.state.drink.text === '가끔 마시는 편' },
      { key: '즐겨 마시는 편', selected: this.state.drink.text === '즐겨 마시는 편' },
      { key: '주당', selected: this.state.drink.text === '주당' }];

    this.openSelectPopup('음주', data, this.onSelectedDrink, 239);
  }

  onSelectedDrink = (item) => {
    this.setState({ 
      drink: {
        ...this.state.drink,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };

  onSchoolBlur = () => 
    this.setState({ 
      school: {
        ...this.state.school,
        isFocus: false,
      },
    });
    
  onSchoolFocus = () => {
    this.setState({ 
      school: {
        ...this.state.school,
        isFocus: true,
      },
    });

    const data = [
      { key: '해외 전문대', selected: this.state.school.text === '해외 전문대' },
      { key: '해외 대학교', selected: this.state.school.text === '해외 대학교' },
      { key: '중학교', selected: this.state.school.text === '중학교' },
      { key: '고등학교', selected: this.state.school.text === '고등학교' },
      { key: '전문대', selected: this.state.school.text === '전문대' },
      { key: '교대', selected: this.state.school.text === '교대' },
      { key: '서울 4년제', selected: this.state.school.text === '서울 4년제' },
      { key: '지방 약대', selected: this.state.school.text === '지방 약대' },
      { key: '서울 약대', selected: this.state.school.text === '서울 약대' },
      { key: '지방 법대', selected: this.state.school.text === '지방 법대' },
      { key: '서울 법대', selected: this.state.school.text === '서울 법대' },
      { key: '지방 의대', selected: this.state.school.text === '지방 의대' },
      { key: '서울 의대', selected: this.state.school.text === '서울 의대' },
      { key: '지방 국립대', selected: this.state.school.text === '지방 국립대' },
      { key: '지방 4년대', selected: this.state.school.text === '지방 4년제' }];

    this.openSelectPopup('학교', data, this.onSelectedSchool, 339);
  }

  onSelectedSchool = (item) => {
    this.setState({ 
      school: {
        ...this.state.school,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onJobBlur = () => 
    this.setState({ 
      job: {
        ...this.state.job,
        isFocus: false,
      },
    });
    
  onJobFocus = () => {
    this.setState({ 
      job: {
        ...this.state.job,
        isFocus: true,
      },
    });

    const data = [
      { key: '경찰', selected: this.state.job.text === '경찰' },
      { key: '공무원', selected: this.state.job.text === '공무원' },
      { key: '교직원', selected: this.state.job.text === '교직원' },
      { key: '의사', selected: this.state.job.text === '의사' },
      { key: '간호사', selected: this.state.job.text === '간호사' },
      { key: '약사', selected: this.state.job.text === '약사' },
      { key: '교육계', selected: this.state.job.text === '교육계' },
      { key: '법조계', selected: this.state.job.text === '법조계' },
      { key: '군인', selected: this.state.job.text === '군인' },
      { key: '대기업', selected: this.state.job.text === '대기업' },
      { key: '사무직', selected: this.state.job.text === '사무직' },
      { key: '엔지니어', selected: this.state.job.text === '엔지니어' },
      { key: '영업', selected: this.state.job.text === '영업' },
      { key: '전문직', selected: this.state.job.text === '전문직' },
      { key: '자영업', selected: this.state.job.text === '자영업' },
      { key: '무직', selected: this.state.job.text === '무직' }];

    this.openSelectPopup('직업', data, this.onSelectedJob, 339);
  }

  onSelectedJob = (item) => {
    this.setState({ 
      job: {
        ...this.state.job,
        text: item.key,
        isComplete: true,
      },
    });
    this.onCloseModal();
  };
    
  onAttractionBlur = () => 
    this.setState({ 
      attraction: {
        ...this.state.attraction,
        isFocus: false,
      },
    });
    
  onAttractionFocus = () => {
    this.setState({ 
      attraction: {
        ...this.state.attraction,
        isFocus: true,
      },
    });

    const data = [
      { key: '큰눈', selected: this.state.attraction.text.indexOf('큰눈') > -1 },
      { key: '강아지상', selected: this.state.attraction.text.indexOf('강아지상') > -1 },
      { key: '고양이상', selected: this.state.attraction.text.indexOf('고양이상') > -1 },
      { key: '사슴상', selected: this.state.attraction.text.indexOf('사슴상') > -1 },
      { key: '오똑한코', selected: this.state.attraction.text.indexOf('오똑한코') > -1 },
      { key: '이목구비', selected: this.state.attraction.text.indexOf('이목구비') > -1 },
      { key: '몸매', selected: this.state.attraction.text.indexOf('몸매') > -1 },
      { key: '개그맨', selected: this.state.attraction.text.indexOf('개그맨') > -1 },
      { key: '근육', selected: this.state.attraction.text.indexOf('근육') > -1 },
      { key: '글래머', selected: this.state.attraction.text.indexOf('글래머') > -1 },
      { key: '자취', selected: this.state.attraction.text.indexOf('자취') > -1 },
      { key: '생활력', selected: this.state.attraction.text.indexOf('생활력') > -1 },
      { key: '큰키', selected: this.state.attraction.text.indexOf('큰키') > -1 }];

    this.openItemSelectPopup('매력포인트', data, this.state.attraction.text, this.onSelectedAttraction, 200);
  }

  onSelectedAttraction = (text) => {
    this.setState({ 
      attraction: {
        ...this.state.attraction,
        text,
        isComplete: true,
      },
    });
  };
    
  onCharacterBlur = () => 
    this.setState({ 
      character: {
        ...this.state.character,
        isFocus: false,
      },
    });
    
  onCharacterFocus = () => {
    this.setState({ 
      character: {
        ...this.state.character,
        isFocus: true,
      },
    });

    const data = [
      { key: '활발', selected: this.state.character.text.indexOf('활발') > -1 },
      { key: '시크', selected: this.state.character.text.indexOf('시크') > -1 },
      { key: '낙천적', selected: this.state.character.text.indexOf('낙천적') > -1 },
      { key: '긍정적', selected: this.state.character.text.indexOf('긍정적') > -1 },
      { key: '활동적', selected: this.state.character.text.indexOf('활동적') > -1 },
      { key: '발랄', selected: this.state.character.text.indexOf('발랄') > -1 },
      { key: '얌전', selected: this.state.character.text.indexOf('얌전') > -1 },
      { key: '4차원', selected: this.state.character.text.indexOf('4차원') > -1 },
      { key: '낭만적', selected: this.state.character.text.indexOf('낭만적') > -1 },
      { key: '배려심', selected: this.state.character.text.indexOf('배려심') > -1 },
      { key: '냉철한', selected: this.state.character.text.indexOf('냉철한') > -1 },
      { key: '침착한', selected: this.state.character.text.indexOf('침착한') > -1 },
      { key: '평범한', selected: this.state.character.text.indexOf('평범한') > -1 }];

    this.openItemSelectPopup('성격', data, this.state.character.text, this.onSelectedCharacter, 200);
  }

  onSelectedCharacter = (text) => {
    this.setState({ 
      character: {
        ...this.state.character,
        text,
        isComplete: true,
      },
    });
  };
    
  onLikeBlur = () => 
    this.setState({ 
      like: {
        ...this.state.like,
        isFocus: false,
      },
    });
    
  onLikeFocus = () => {
    this.setState({ 
      like: {
        ...this.state.like,
        isFocus: true,
      },
    });

    const data = [
      { key: '스포츠', selected: this.state.like.text.indexOf('스포츠') > -1 },
      { key: '패션', selected: this.state.like.text.indexOf('패션') > -1 },
      { key: '독서', selected: this.state.like.text.indexOf('독서') > -1 },
      { key: '영화', selected: this.state.like.text.indexOf('영화') > -1 },
      { key: '여행', selected: this.state.like.text.indexOf('여행') > -1 },
      { key: '클럽', selected: this.state.like.text.indexOf('클럽') > -1 },
      { key: '음악', selected: this.state.like.text.indexOf('음악') > -1 },
      { key: '노래', selected: this.state.like.text.indexOf('노래') > -1 },
      { key: '공연', selected: this.state.like.text.indexOf('공연') > -1 },
      { key: '예능', selected: this.state.like.text.indexOf('예능') > -1 },
      { key: '시사', selected: this.state.like.text.indexOf('시사') > -1 },
      { key: '정치', selected: this.state.like.text.indexOf('정치') > -1 },
      { key: '사회', selected: this.state.like.text.indexOf('사회') > -1 }];

    this.openItemSelectPopup('관심사', data, this.state.like.text, this.onSelectedLike, 200);
  }

  onSelectedLike = (text) => {
    this.setState({ 
      like: {
        ...this.state.like,
        text,
        isComplete: true,
      },
    });
  };
    
  onWantBlur = () => 
    this.setState({ 
      want: {
        ...this.state.want,
        isFocus: false,
      },
    });
    
  onWantFocus = () => {
    this.setState({ 
      want: {
        ...this.state.want,
        isFocus: true,
      },
    });

    const data = [
      { key: '예의바른', selected: this.state.want.text.indexOf('예의바른') > -1 },
      { key: '열정적인', selected: this.state.want.text.indexOf('열정적인') > -1 },
      { key: '귀여운', selected: this.state.want.text.indexOf('귀여운') > -1 },
      { key: '연락 잘 하는', selected: this.state.want.text.indexOf('연락 잘 하는') > -1 },
      { key: '애교있는', selected: this.state.want.text.indexOf('애교있는') > -1 },
      { key: '자상한', selected: this.state.want.text.indexOf('자상한') > -1 },
      { key: '평범한', selected: this.state.want.text.indexOf('평범한') > -1 },
      { key: '순진한', selected: this.state.want.text.indexOf('순진한') > -1 },
      { key: '센스있는', selected: this.state.want.text.indexOf('센스있는') > -1 },
      { key: '착한', selected: this.state.want.text.indexOf('착한') > -1 }];

    this.openItemSelectPopup('이상형', data, this.state.want.text, this.onSelectedWant, 200);
  }

  onSelectedWant = (text) => {
    this.setState({ 
      want: {
        ...this.state.want,
        text,
        isComplete: true,
      },
    });
  };
    
  onPlayBlur = () => 
    this.setState({ 
      play: {
        ...this.state.play,
        isFocus: false,
      },
    });
    
  onPlayFocus = () => {
    this.setState({ 
      play: {
        ...this.state.play,
        isFocus: true,
      },
    });

    const data = [
      { key: '밤새 통화 하기', selected: this.state.play.text.indexOf('밤새 통화 하기') > -1 },
      { key: '드라이브 가기', selected: this.state.play.text.indexOf('드라이브 가기') > -1 },
      { key: '맛집 투어', selected: this.state.play.text.indexOf('맛집 투어') > -1 },
      { key: '주말 여행', selected: this.state.play.text.indexOf('주말 여행') > -1 },
      { key: '공연 보기', selected: this.state.play.text.indexOf('공연 보기') > -1 },
      { key: '영화 감상', selected: this.state.play.text.indexOf('영화 감상') > -1 },
      { key: '뒹굴뒹굴', selected: this.state.play.text.indexOf('뒹굴뒹굴') > -1 },
      { key: '카페 데이트', selected: this.state.play.text.indexOf('카페 데이트') > -1 },
      { key: '피시방 가기', selected: this.state.play.text.indexOf('피시방 가기') > -1 },
      { key: '그냥 걷기', selected: this.state.play.text.indexOf('그냥 걷기') > -1 }];

    this.openItemSelectPopup('데이트 스타일', data, this.state.play.text, this.onSelectedPlay, 200);
  }

  onSelectedPlay = (text) => {
    this.setState({ 
      play: {
        ...this.state.play,
        text,
        isComplete: true,
      },
    });
  };

  onMessageChange = (text) => { 
    this.setState({
      message: {
        ...this.state.message,
        text,
      },
    });
  };
    
  onMessageFocus = () => 
    this.setState({ 
      message: {
        ...this.state.message,
        isFocus: true,
      },
    });
    
  onMessageBlur = () => 
    this.setState({ 
      message: {
        ...this.state.message,
        isFocus: false,
      },
    });

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

  uriToBase64 = async (uri) => {
    if (uri === null) return;

    const fetch = await RNFetchBlob.config({ 
      fileCache: true,
    }).fetch('GET', uri);

    const data = await fetch.readFile('base64');

    fs.unlink(fetch.path());
    
    return data;
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

  modify = async () => {
    const data = {
      nickname: this.state.nickname.text,
      year: this.state.year.text,
      sex: this.state.sex.text,
      tall: this.state.tall.text,
      shape: this.state.shape.text,
      blood: this.state.blood.text,
      religion: this.state.religion.text,
      smoke: this.state.smoke.text,
      drink: this.state.drink.text,
      phone: this.state.phone.text,
      location: this.state.location.text,
      school: this.state.school.text,
      job: this.state.job.text,
      attraction: this.state.attraction.text,
      character: this.state.character.text,
      like: this.state.like.text,
      want: this.state.want.text,
      play: this.state.play.text,
      message: this.state.message.text,
      images: null,
    };

    this.setState({ isLoading: true });
    
    data.images = await this.uploads();

    await this.write(data);

    this.setState({ isLoading: false, isModifying: true });
  };

  write = async (data) => {
    const { key } = this.props.user;

    await firebase.database().ref('modify_users').child(key).set({
      ...data,
      time: Date.now(),
    });
  };

  uploads = async () => {
    const data = [];

    if (this.state.picture1) {
      if (this.state.picture1.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture1.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture1.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
    }

    if (this.state.picture2) {
      if (this.state.picture2.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture2.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture2.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
    }

    if (this.state.picture3) {
      if (this.state.picture3.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture3.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture3.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
    }

    if (this.state.picture4) {
      if (this.state.picture4.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture4.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture4.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
    }

    if (this.state.picture5) {
      if (this.state.picture5.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture5.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture5.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
    }

    if (this.state.picture6) {
      if (this.state.picture6.uri.indexOf('http') > -1) {
        const base64Data = await this.uriToBase64(this.state.picture6.uri);
        const url = await this.uploadImage(base64Data, 'image/jpeg');
        data.push(url);
      } else {
        const url = await this.uploadImage(this.state.picture6.uri.split(',')[1], 'image/jpeg');
        data.push(url);
      }
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

  openSelectPopup = (title, data, onSelected, contentHeight = null, isCloseButton = true) => {
    Keyboard.dismiss();

    this.props.navigator.showModal({
      screen: 'Modal', 
      animationType: 'fade',
      passProps: {
        navigator: this.props.navigator,
        popup: <SelectPopup 
          title={title}
          data={data}
          isCloseButton={isCloseButton}
          onClose={this.onCloseModal} 
          onSelected={onSelected}
          contentHeight={contentHeight}
        />,
      },
    });
  };

  openItemSelectPopup = (title, data, state, onSelected, contentHeight = null) => {
    Keyboard.dismiss();

    this.props.navigator.showModal({
      screen: 'Modal', 
      animationType: 'fade',
      passProps: {
        navigator: this.props.navigator,
        popup: <ItemSelectPopup 
          title={title}
          data={data}
          state={state}
          onPress={this.onCloseModal} 
          onSelected={onSelected}
          contentHeight={contentHeight}
        />,
      },
    });
  };

  render = () => (
    <ProfileSetting
      navigator={this.props.navigator}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
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
      nickname={{ 
        onChangeText: this.onNicknameChange, 
        onFocus: this.onNicknameFocus, 
        onBlur: this.onNicknameBlur, 
        text: this.state.nickname.text,
        isFocus: this.state.nickname.isFocus,
        isComplete: this.state.nickname.isComplete,
      }}
      phone={{ 
        onChangeText: this.onPhoneChange, 
        onFocus: this.onPhoneFocus, 
        onBlur: this.onPhoneBlur, 
        text: this.state.phone.text,
        isFocus: this.state.phone.isFocus,
        isComplete: this.state.phone.isComplete,
      }}
      year={{
        onFocus: this.onYearFocus, 
        onBlur: this.onYearBlur, 
        text: this.state.year.text,
        isFocus: this.state.year.isFocus,
        isComplete: this.state.year.isComplete,
      }}
      sex={{
        onFocus: this.onSexFocus,
        onBlur: this.onSexBlur, 
        text: this.state.sex.text,
        isFocus: this.state.sex.isFocus,
        isComplete: this.state.sex.isComplete,
      }}
      tall={{
        onFocus: this.onTallFocus,
        onBlur: this.onTallBlur, 
        text: this.state.tall.text,
        isFocus: this.state.tall.isFocus,
        isComplete: this.state.tall.isComplete,
      }}
      shape={{
        onFocus: this.onShapeFocus,
        onBlur: this.onShapeBlur, 
        text: this.state.shape.text,
        isFocus: this.state.shape.isFocus,
        isComplete: this.state.shape.isComplete,
      }}
      blood={{
        onFocus: this.onBloodFocus,
        onBlur: this.onBloodBlur, 
        text: this.state.blood.text,
        isFocus: this.state.blood.isFocus,
        isComplete: this.state.blood.isComplete,
      }}
      religion={{
        onFocus: this.onReligionFocus,
        onBlur: this.onReligionBlur, 
        text: this.state.religion.text,
        isFocus: this.state.religion.isFocus,
        isComplete: this.state.religion.isComplete,
      }}
      smoke={{
        onFocus: this.onSmokeFocus,
        onBlur: this.onSmokeBlur, 
        text: this.state.smoke.text,
        isFocus: this.state.smoke.isFocus,
        isComplete: this.state.smoke.isComplete,
      }}
      drink={{
        onFocus: this.onDrinkFocus,
        onBlur: this.onDrinkBlur, 
        text: this.state.drink.text,
        isFocus: this.state.drink.isFocus,
        isComplete: this.state.drink.isComplete,
      }}
      location={{ 
        text: this.state.location.text,
        isComplete: this.state.location.isComplete,
      }}
      school={{
        onFocus: this.onSchoolFocus, 
        onBlur: this.onSchoolBlur, 
        text: this.state.school.text,
        isFocus: this.state.school.isFocus,
        isComplete: this.state.school.isComplete,
      }}
      job={{
        onFocus: this.onJobFocus, 
        onBlur: this.onJobBlur, 
        text: this.state.job.text,
        isFocus: this.state.job.isFocus,
        isComplete: this.state.job.isComplete,
      }}
      attraction={{
        onFocus: this.onAttractionFocus, 
        onBlur: this.onAttractionBlur, 
        text: this.state.attraction.text,
        isFocus: this.state.attraction.isFocus,
        isComplete: this.state.attraction.isComplete,
      }}
      character={{
        onFocus: this.onCharacterFocus, 
        onBlur: this.onCharacterBlur, 
        text: this.state.character.text,
        isFocus: this.state.character.isFocus,
        isComplete: this.state.character.isComplete,
      }}
      like={{
        onFocus: this.onLikeFocus, 
        onBlur: this.onLikeBlur, 
        text: this.state.like.text,
        isFocus: this.state.like.isFocus,
        isComplete: this.state.like.isComplete,
      }}
      want={{
        onFocus: this.onWantFocus, 
        onBlur: this.onWantBlur, 
        text: this.state.want.text,
        isFocus: this.state.want.isFocus,
        isComplete: this.state.want.isComplete,
      }}
      play={{
        onFocus: this.onPlayFocus, 
        onBlur: this.onPlayBlur, 
        text: this.state.play.text,
        isFocus: this.state.play.isFocus,
        isComplete: this.state.play.isComplete,
      }}
      message={{
        onChangeText: this.onMessageChange,
        onFocus: this.onMessageFocus,
        onBlur: this.onMessageBlur, 
        text: this.state.message.text,
        isFocus: this.state.message.isFocus,
        isComplete: this.state.message.isComplete,
      }}
      isLoading={this.state.isLoading}
      isModifying={this.state.isModifying || this.props.modifyUser !== null}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  point: state.user.point,
  user: state.user.modifyUser !== null ? state.user.modifyUser : state.user.user,
  modifyUser: state.user.modifyUser,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
