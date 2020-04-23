import React from 'react';

import { S } from './styles';

interface Props {
  // handler?: () => void;
  // data?: {
  //   text: string;
  // };
  // data?: string;
}

export const Counter: React.FC<Props> = () => {
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);
  return (
    <>
      <S.Button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increment
      </S.Button>

      <S.Div>
        <S.Value>count: {count}</S.Value>
        <S.Value>renders: {renders.current++}</S.Value>
      </S.Div>
    </>
  );
};
