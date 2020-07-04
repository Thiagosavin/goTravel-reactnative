import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #3d90e3;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 30px;
  margin-top: 10px;
`;
export const ButtonText = styled.Text`
  font-size: 15px;
  color: white;
  font-family: 'MuseoModerno-Medium';
`;
