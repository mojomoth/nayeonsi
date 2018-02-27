import { Navigation } from 'react-native-navigation';
import Landing from 'pages/Landing';
import Modal from 'pages/Modal';
import Login from 'pages/Login';
import Join from 'pages/Join';
import JoinProfile from 'pages/JoinProfile';
import JoinAppeal from 'pages/JoinAppeal';
import JoinAlbum from 'pages/JoinAlbum';
import JoinResult from 'pages/JoinResult';
import Main from 'pages/Main';
import History from 'pages/History';
import Appeal from 'pages/Appeal';
import Message from 'pages/Message';
import Menus from 'pages/Menus';
import Profile from 'pages/Profile';
import Chat from 'pages/Chat';
import Notice from 'pages/Notice';
import Event from 'pages/Event';
import Setting from 'pages/Setting';
import ProfileSetting from 'pages/ProfileSetting';
import Store from 'pages/Store';

// screen related book keeping
const registerScreens = (store, Provider) => {
  Navigation.registerComponent('Landing', () => Landing, store, Provider);
  Navigation.registerComponent('Modal', () => Modal, store, Provider);
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Join', () => Join, store, Provider);
  Navigation.registerComponent('JoinProfile', () => JoinProfile, store, Provider);
  Navigation.registerComponent('JoinAppeal', () => JoinAppeal, store, Provider);
  Navigation.registerComponent('JoinAlbum', () => JoinAlbum, store, Provider);
  Navigation.registerComponent('JoinResult', () => JoinResult, store, Provider);
  Navigation.registerComponent('Main', () => Main, store, Provider);
  Navigation.registerComponent('History', () => History, store, Provider);
  Navigation.registerComponent('Appeal', () => Appeal, store, Provider);
  Navigation.registerComponent('Message', () => Message, store, Provider);
  Navigation.registerComponent('Menus', () => Menus, store, Provider);
  Navigation.registerComponent('Profile', () => Profile, store, Provider);
  Navigation.registerComponent('Chat', () => Chat, store, Provider);
  Navigation.registerComponent('Notice', () => Notice, store, Provider);
  Navigation.registerComponent('Event', () => Event, store, Provider);
  Navigation.registerComponent('Setting', () => Setting, store, Provider);
  Navigation.registerComponent('ProfileSetting', () => ProfileSetting, store, Provider);
  Navigation.registerComponent('Store', () => Store, store, Provider);
};

export default registerScreens;
