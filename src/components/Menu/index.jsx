import React, { useState } from 'react';

import {
  Profile,
  Select,
  Button,
  Option,
} from './styles';

export default function Menu() {
  const [isClicked, setIsClicked] = useState(false);

  function Logout() {
    window.location.href = '/';
    // eslint-disable-next-line no-alert
    alert('Sessão Encerrada');
  }

  return (
    <>
      <div>
        <Profile
          onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
        >
          QA
        </Profile>
        <Button view={isClicked} onClick={Logout}>
          Sair
        </Button>
      </div>
      <Select>
        <Option>New</Option>
        <Option>All</Option>
        <Option>Spam</Option>
        <Option>Bin</Option>
      </Select>
    </>
  );
}
