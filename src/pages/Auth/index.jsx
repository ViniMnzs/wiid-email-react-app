import React, { useState } from 'react';

import {
  Container,
  Modal,
  Input,
  Button,
  Message,
} from './styles';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  function SignIn() {
    if (username === 'admin' && password === 'admin') {
      setIsError(false);
      // eslint-disable-next-line no-alert
      alert('Logado com sucesso');
      window.location.href = '/main';
    } else {
      setIsError(true);
    }
  }

  return (
    <Container>
      <Modal>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" onClick={SignIn}>
          Entrar
        </Button>
        <Message color={isError}>login incorreto!</Message>
      </Modal>
    </Container>
  );
}
