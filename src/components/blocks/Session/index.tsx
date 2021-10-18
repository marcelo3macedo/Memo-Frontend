import React from 'react';
import { useDispatch } from "react-redux";

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, ReviewTitle, Title, Opacity, Data } from './styles';
import { openAction } from '@store/modules/session/actions';
import { randomBackground } from '@config/Backgrounds';

export default function Session({ data }) {
  const dispatch = useDispatch();
  const background = randomBackground();
  const icon = "card";

  function openSessionClick() {
    dispatch(openAction({ sessionId: data.id }));
  }

  return (
    <Wrapper onClick={openSessionClick}>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.deck.name}</Title>
          <Info>
            <ReviewTitle>Revisão:</ReviewTitle>
            <IconSmall name={icon} />
            <Quantity>{data.sessionCards}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}