import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background: white;
  border: 1px solid;
  border-color: #3d90e3;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: black;
  font-family: 'MuseoModerno-Medium';
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 15px;
`;
