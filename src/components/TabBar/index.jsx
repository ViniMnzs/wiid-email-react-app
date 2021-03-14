/* eslint-disable max-len */
import React, { useContext, useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { InboxContext } from '../../hooks/InboxContext';

import {
  GlobalStyles,
  Container,
  Line,
  ButtonContainer,
  FilterContainer,
  Search,
  Button,
  MenuIcon,
  Interruptor,
} from './styles';

export default function TabBar() {
  const { isOpen } = useContext(InboxContext);
  const [isDark, setIsDark] = useState(false);

  return (
    <Container>
      <GlobalStyles theme={isDark} />
      <Line>
        <MenuIcon onClick={isOpen} />
        <Search type="text" placeholder="Pesquisar..." />
        <FormControlLabel
          value="bottom"
          label="Tema"
          labelPlacement="bottom"
          control={(
            <Interruptor
              size="small"
              checked={isDark}
              onChange={() => (isDark ? setIsDark(false) : setIsDark(true))}
            />
        )}
        />
      </Line>
      <Line>
        <ButtonContainer>
          <Button>Atribuir</Button>
          <Button>Arquivar</Button>
          <Button>Agendar</Button>
        </ButtonContainer>
        <FilterContainer>
          <Button>Filtro</Button>
        </FilterContainer>
      </Line>
    </Container>
  );
}
