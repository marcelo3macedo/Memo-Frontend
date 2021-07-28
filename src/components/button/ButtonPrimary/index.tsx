import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function ButtonPrimary({ content, type=null }) {
  return (
    <Wrapper type={type ?? 'button'}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}