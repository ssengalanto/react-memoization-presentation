import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './counter';
import './main.css';

import { S } from './styles';

const App: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <S.Wrapper>
      <S.Input
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Counter />
    </S.Wrapper>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
