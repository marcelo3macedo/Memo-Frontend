import React from 'react';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';
import Deck from '../Deck';
import ModalRemoveDeck from '@components/modal/ModalRemoveDeck';

export default function DecksColumn({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              <Deck data={d} />
            </DeckComponent>
          </DeckWrapper>
        ))}

        <ModalRemoveDeck />
      </Content>
    </Wrapper>
  );
}