import React, { Component } from 'react';
import { Alert, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import MakeAppeal from 'screens/MakeAppeal';
import SelectPopup from 'popups/SelectPopup';
import ItemSelectPopup from 'popups/ItemSelectPopup';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    location: { 
      isFocus: false, isAlarm: false, isComplete: true, text: '대한민국(전체)', alarm: '', 
    },
    school: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    job: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    attraction: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    character: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    like: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    want: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    play: { 
      isFocus: false, isAlarm: false, isComplete: false, text: '', alarm: '', 
    },
    message: { 
      isFocus: false, isAlarm: false, isComplete: true, text: '', alarm: '', 
    },
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

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    const isValid = this.state.location.isComplete 
      && this.state.school.isComplete
      && this.state.job.isComplete
      && this.state.attraction.isComplete
      && this.state.character.isComplete
      && this.state.like.isComplete
      && this.state.want.isComplete
      && this.state.play.isComplete;

    if (!isValid) {
      Alert.alert('회원가입', '프로필을 완성해주세요.');
      return;
    }

    this.props.navigator.push({
      screen: 'JoinAlbum', 
      passProps: {
        navigator: this.props.navigator,
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
        location: this.state.location.text,
        school: this.state.school.text,
        job: this.state.job.text,
        attraction: this.state.attraction.text,
        character: this.state.character.text,
        like: this.state.like.text,
        want: this.state.want.text,
        play: this.state.play.text,
        message: this.state.message.text,
      },
    });  
  }

  onCloseModal = () => {
    this.props.navigator.dismissModal();
    Keyboard.dismiss();
  };

  mergeSelectedItem = (items, selectedItem) => {
    const selectedItems = [];
    for (const item of items) {
      if (item.key === selectedItem.key) {
        item.selected = !item.selected;
      }

      if (item.selected) {
        selectedItems.push(item.key);
      }
    }

    return selectedItems.join(', ');
  };

  openSelectPopup = (title, data, onSelected, contentHeight = null, isCloseButton = true) => 
    this.props.navigator.showModal({
      screen: 'Modal', 
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

  openItemSelectPopup = (title, data, state, onSelected, contentHeight = null) => 
    this.props.navigator.showModal({
      screen: 'Modal', 
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

  render = () => (
    <MakeAppeal
      onBack={this.onBack}
      onPress={this.onPress}
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
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
