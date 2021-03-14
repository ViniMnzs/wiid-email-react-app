import React, { useContext } from 'react';

import { InboxContext } from '../../hooks/InboxContext';

import {
  Container,
  Line,
  ButtonContainer,
  FilterContainer,
  Search,
  Button,
  MenuIcon,
} from './styles';

export default function TabBar() {
  const { isOpen } = useContext(InboxContext);

  return (
    <Container>
      <Line>
        <MenuIcon onClick={isOpen} />
        <Search type="text" placeholder="Pesquisar..." />
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
