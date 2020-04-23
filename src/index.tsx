import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Counter } from './counter';
import './main.css';

import { S } from './styles';
import { Docs } from './docs';

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

const Main: React.FC = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/docs" component={Docs} />
  </Switch>
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  rootElement
);
