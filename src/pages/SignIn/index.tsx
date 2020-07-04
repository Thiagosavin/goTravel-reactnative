import React from 'react';
import { Container, Title, Image } from './styles';
import logoImg from '../../assets/GoTravelLogo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Login</Title>

      <Input name="email" icon="mail" placeholder="Insira seu e-mail." />

      <Input name="password" icon="lock" placeholder="Insira sua senha." />

      <Button
        onPress={() => {
          console.log('logando');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};
export default SignIn;
