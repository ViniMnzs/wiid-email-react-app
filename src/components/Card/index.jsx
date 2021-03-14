import React, { useState } from 'react';
import moment from 'moment';
import { AiOutlineCheck } from 'react-icons/ai';

import {
  Container,
  User,
  Profile,
  ProfileUsers,
  Message,
  Line,
  Info,
} from './styles';

export default function Card(value) {
  const data = value.value;
  const time = moment(new Date()).format('hh:mm');
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {
      data && (
        <Container checked={isSelected} display={!!isSelected}>
          <User>
            <Profile
              checked={isSelected}
              onClick={() => (isSelected ? setIsSelected(false) : setIsSelected(true))}
            >
              { isSelected ? <AiOutlineCheck /> : data.owner }
            </Profile>
          </User>
          <Message>
            <Line><strong>{data.name}</strong></Line>
            <Line>{data.subject}</Line>
          </Message>
          <Info>
            <Line><strong>{time}</strong></Line>
            <Line>
              {
              data.users && data.users.map((user, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ProfileUsers key={index}>
                  {user}
                </ProfileUsers>
              ))
            }
            </Line>
          </Info>
        </Container>
      )
    }
    </>
  );
}
