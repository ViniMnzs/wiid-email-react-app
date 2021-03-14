import React, { useState, useContext } from 'react';

import api from '../../services/api';
import { InboxContext } from '../../hooks/InboxContext';

import Collapsible from '../Collapsible';

import { Container, Button, Span } from './styles';

export default function Inbox() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { InboxId } = useContext(InboxContext);

  // Async usado para evitar cache no console
  async function applyId(id) {
    await InboxId(id);
  }

  api.get('/menus').then((response) => {
    setData(response.data);
    setIsLoading(false);
  })
    .catch(() => {
      setIsLoading(false);
      // eslint-disable-next-line no-console
      console.log('Algo errado aconteceu, tente novamente mais tarde!');
    });

  return (
    <Container>
      {
        isLoading ? (
          <Span>Carregando...</Span>
        ) : (
          <>
            {data ? (
              data.map((value) => (
                <Collapsible
                  key={value.id}
                  visible={<>{value.name}</>}
                  invisible={
              value.subMenus.map((subvalue) => (
                <Button onClick={() => applyId(subvalue.id)} type="button" key={subvalue.id}>
                  {subvalue.name}
                </Button>
              ))
            }
                />
              ))) : (
                <p>Não há contas para mostrar</p>
            )}
          </>
        )
      }
    </Container>
  );
}
