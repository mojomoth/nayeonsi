import React from 'react';
import { Text, PixelRatio } from 'react-native';

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

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Logo', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Image', () => (
    <Logo />
  ));

storiesOf('Sceen', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('View', () => (
    <Panel />
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
      <OutlineButtonLabel enabled={false}>취소</OutlineButtonLabel>
    </OutlineRoundButton>
  ))
  .add('Switch - on', () => (
    <Switch onPress={action('clicked-text')} enabled={1} />
  ));

storiesOf('Label', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with Text', () => <Label text="가나다라마바사아자차카타파하" />);
