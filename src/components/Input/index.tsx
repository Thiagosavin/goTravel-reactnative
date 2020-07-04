import React from 'react';
import { TextInputProperties } from 'react-native';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} />
    <TextInput keyboardAppearance="default" {...rest} />
  </Container>
);
export default Input;
