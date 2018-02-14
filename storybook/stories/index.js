import React from 'react';
import { View, Text, PixelRatio, Dimensions } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';
import Button from 'atoms/Button';
import FilledButton from 'atoms/FilledButton';
import OutlineButton from 'atoms/OutlineButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import FilledRoundButton from 'atoms/FilledRoundButton';
import OutlineRoundButton from 'atoms/OutlineRoundButton';
import Switch from 'atoms/Switch';
import Label from 'atoms/Label';
import Logo from 'atoms/Logo';
import Panel from 'atoms/Panel';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import MailIcon from 'icons/Mail';
import Navigation from 'systems/MainNavigation';
import MainContainer from 'systems/MainContainer';

import BasicPopup from 'popups/BasicPopup';
import SelectPopup from 'popups/SelectPopup';
import TypeSearchPopup from 'popups/TypeSearchPopup';
import ItemSelectPopup from 'popups/ItemSelectPopup';
import MobileCheckPopup from 'popups/MobileCheckPopup';
import MobileCertCheckPopup from 'popups/MobileCertCheckPopup';
import PasswordChangePopup from 'popups/PasswordChangePopup';
import PasswordSendPopup from 'popups/PasswordSendPopup';
import PointUsePopup from 'popups/PointUsePopup';
import AppealPopup from 'popups/AppealPopup';

import Login from 'screens/Login';
import Landing from 'screens/Landing';
import EmailJoin from 'screens/EmailJoin';
import MakeProfile from 'screens/MakeProfile';
import MakeAppeal from 'screens/MakeAppeal';
import MakeAlbum from 'screens/MakeAlbum';
import JoinResult from 'screens/JoinResult';
import Main from 'screens/Main';
import History from 'screens/History';
import Appeal from 'screens/Appeal';
import Message from 'screens/Message';
import Chat from 'screens/Chat';
import Profile from 'screens/Profile';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Wrapper')} />);

storiesOf('Sceen', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Profile', () => (
    <Profile />
  ))
  .add('Chat', () => (
    <Chat />
  ))
  .add('Message', () => (
    <Message />
  ))
  .add('Appeal', () => (
    <Appeal />
  ))
  .add('History', () => (
    <History />
  ))
  .add('Main', () => (
    <Main />
  ))
  .add('JoinResult', () => (
    <JoinResult />
  ))
  .add('MakeAlbum', () => (
    <MakeAlbum />
  ))
  .add('MakeAppeal', () => (
    <MakeAppeal />
  ))
  .add('MakeProfile', () => (
    <MakeProfile />
  ))
  .add('EmailJoin', () => (
    <EmailJoin />
  ))
  .add('Login', () => (
    <Login />
  ))
  .add('Landing', () => (
    <Landing />
  ));

storiesOf('Popup', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('- basic popup', () => (
    <BasicPopup />
  ))
  .add('- select popup', () => (
    <SelectPopup />
  ))
  .add('- type search popup', () => (
    <TypeSearchPopup />
  ))
  .add('- item select popup', () => (
    <ItemSelectPopup />
  ))
  .add('- mobile check popup', () => (
    <MobileCheckPopup />
  ))
  .add('- mobile cert check popup', () => (
    <MobileCertCheckPopup />
  ))
  .add('- password change popup', () => (
    <PasswordChangePopup />
  ))
  .add('- password send popup', () => (
    <PasswordSendPopup />
  ))
  .add('- point use popup', () => (
    <PointUsePopup />
  ))
  .add('- appeal popup', () => (
    <AppealPopup />
  ));
  
storiesOf('Logo', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Image', () => (
    <Logo />
  ));

storiesOf('Navigation', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('MainNavigation', () => (
    <Navigation />
  ))
  .add('MainContainer', () => (
    <MainContainer />
  )); 
  
storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('FilledButton - text', () => (
    <FilledButton onPress={action('clicked-text')}>
      <FilledButtonLabel>확인</FilledButtonLabel>
    </FilledButton>
  ))
  .add('OutlineButton - text', () => (
    <OutlineButton onPress={action('clicked-text')} size={40}>
      <OutlineButtonLabel>취소</OutlineButtonLabel>
    </OutlineButton>
  ))
  .add('FilledRoundButton - text', () => (
    <FilledRoundButton onPress={action('clicked-text')}>
      <FilledButtonLabel>확인</FilledButtonLabel>
    </FilledRoundButton>
  ))
  .add('OutlineRoundButton - text', () => (
    <OutlineRoundButton onPress={action('clicked-text')} size={80}>
      <OutlineButtonLabel>취소</OutlineButtonLabel>
    </OutlineRoundButton>
  ))
  .add('Switch - on', () => (
    <Switch onPress={action('clicked-text')} enabled={true} />
  ));

storiesOf('Label', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with Text', () => <Label text="가나다라마바사아자차카타파하" />);

storiesOf('Wrapper', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('text input with icon', () => (
    <InputWrapper>
      <MailIcon />
      <TextInput placeholder="이메일" />
    </InputWrapper>
  ))
  .add('text input', () => (
    <InputWrapper>
      <TextInput placeholder="Type here to translate!" />
    </InputWrapper>
  ));
