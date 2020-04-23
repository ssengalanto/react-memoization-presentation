import React from 'react';

import { S } from './styles';

interface Props {
  // handler?: () => void;
  // data?: {
  //   text: string;
  // };
  // data?: string;
}

export const Counter: React.FC<Props> = React.memo(() => {
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
        <S.Text>count: {count}</S.Text>
        <S.Text>renders: {renders.current++}</S.Text>
      </S.Div>
    </>
  );
});
