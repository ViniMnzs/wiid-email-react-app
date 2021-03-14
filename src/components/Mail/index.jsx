import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';
import { InboxContext } from '../../hooks/InboxContext';

import Card from '../Card';

import { CardContainer, Span } from './styles';

// eslint-disable-next-line react/prop-types
export default function Mail() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useContext(InboxContext);

  useEffect(() => {
    if (id !== null) {
      api.get(`/items/${id}`).then((response) => {
        setData(response.data.subMenuItems);
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
        // eslint-disable-next-line no-console
        // console.log('Algo errado aconteceu, tente novamente mais tarde!');
      });
    }
  }, [id]);

  return (
    <CardContainer>
      {
        isLoading ? (
          <Span>Selecione uma caixa de entrada</Span>
        ) : (
          <>
            {
            data.length > 0 ? data.map((mail) => (
              <Card key={mail.id} value={mail} />
            )) : <Span> Nada para mostrar </Span>
          }
          </>
        )
      }
    </CardContainer>
  );
}
