import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import MakeProfile from 'screens/MakeProfile';
import BasicPopup from 'popups/BasicPopup';
import SelectPopup from 'popups/SelectPopup';

const MIN_NICKNAME = 4;
const MIN_PHONE = 10;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    nickname: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    year: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    sex: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    tall: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    shape: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    blood: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    religion: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    smoke: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    drink: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
    phone: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '',
    },
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    const isValid = this.state.nickname.isComplete 
    && this.state.year.isComplete
    && this.state.sex.isComplete
    && this.state.tall.isComplete
    && this.state.shape.isComplete
    && this.state.blood.isComplete
    && this.state.religion.isComplete
    && this.state.smoke.isComplete
    && this.state.drink.isComplete
    && this.state.phone.isComplete;

    if (!isValid) {
      if (this.state.nickname.isComplete === false) {
        this.openPopup('회원가입', `닉네임을 ${MIN_NICKNAME}글자 이상 입력하세요`);
      } else if (this.state.phone.isComplete === false) {
        this.openPopup('회원가입', `연락처를 ${MIN_PHONE}글자 이상 입력하세요`);
      } else {
        this.openPopup('회원가입', '프로필을 완성해주세요.');
      }

      return;
    }

    this.props.navigator.push({
      screen: 'JoinAppeal', 
      passProps: {
        navigator: this.props.navigator,
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
      },
    });  
  };

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

  onCloseModal = () => {
    this.props.navigator.dismissModal({ animationType: 'fade' });
    Keyboard.dismiss();
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

  render = () => (
    <MakeProfile
      onBack={this.onBack}
      onPress={this.onPress}
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
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
