import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { COLOR, FACEBOOK_COLOR } from 'constants/color';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  emailButton: {
    width: 374 * PixelRatio,
    marginTop: 10 * PixelRatio,
    marginBottom: 10 * PixelRatio,
  },
  facebookButton: {
    width: 374 * PixelRatio,
    borderColor: FACEBOOK_COLOR,
    marginBottom: 30 * PixelRatio,
  },
  loginButton: {
    width: 374 * PixelRatio,
  },
  facebookButtonLabel: {
    color: FACEBOOK_COLOR,
  },
  textInput: {
    flex: 1,
  },
  emailWrapper: {
    borderBottomWidth: 1.3 * PixelRatio,
  },
  passwordWrapper: {
    marginBottom: 39.7 * PixelRatio,
    borderBottomWidth: 1.3 * PixelRatio,
  },
  fogotPassword: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fogotPasswordLabel: {
    fontSize: 15.6 * PixelRatio,
    color: COLOR,
    textDecorationLine: 'underline',
    marginTop: 13.7 * PixelRatio,
  },
});

export default styles;
