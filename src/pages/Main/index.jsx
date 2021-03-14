import React from 'react';

import Menu from '../../components/Menu';
import Inbox from '../../components/Inbox';
import Mail from '../../components/Mail';
import TabBar from '../../components/TabBar';
import InboxProvider from '../../hooks/InboxContext';

import {
  Container,
  MenuContainer,
  HomeContainer,
  Line,
} from './styles';

export default function Main() {
  return (
    <InboxProvider>
      <Container>
        <MenuContainer>
          <Line>
            <Menu />
          </Line>
          <Line>
            <Inbox />
          </Line>
        </MenuContainer>
        <HomeContainer>
          <TabBar />
          <Mail />
        </HomeContainer>
      </Container>
    </InboxProvider>
  );
}
