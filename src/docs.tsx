import React from 'react';

import { Carousel } from 'antd';

import { S } from './styles';

const primitive = [
  'string',
  'number',
  'boolean',
  'symbol',
  'null',
  'undefined',
];

const reference = ['objects', 'array', 'functions'];

const pEquality = [
  'true === true = true',
  'false === false = true',
  '1 === 1 = true',
  "'a' === 'a' = true",
];

const rEquality = [
  '{} === {} = false',
  '[] === [] = false',
  '() => {} === () => {} = false',
];

const strictEqual = [
  'const a = {}',
  'const b = {}',
  'a === a = true',
  'a === b = false',
];
const shallowEqual = ['const x = {}', 'const y = {}', 'x === y = true'];

const reactKey = [
  'state/props change (new object/pointer for referencial state)',
  'parent component re-renders, (unless memoized)',
];

const passPrimitive = [
  'let a = 10',
  'let b = a',
  'a = 20',
  'console.log(a) = 20',
  'console.log(b) = 10',
]

const passReference = [
  'let x = { z: 10 }',
  'let y = x',
  'x.z = 20',
  'console.log(x) = { z: 20 }',
  'console.log(y) = { z: 20 }',
]

export const Docs = () => (
  <Carousel>
    <div>
      <S.Container>
        <S.Title>Primitive & Reference Types</S.Title>
        <S.Row>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Primitive:</S.SubTitle>
            {primitive.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Reference:</S.SubTitle>
            {reference.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
        </S.Row>
      </S.Container>
    </div>
    <div>
      <S.Container>
        <S.Title>Pass By Reference</S.Title>
        <S.Row>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Primitive:</S.SubTitle>
            {passPrimitive.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Reference:</S.SubTitle>
            {passReference.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
        </S.Row>
        <S.Text>Primitives are copied by their value.</S.Text>
        <S.Text>Objects are copied by their reference.</S.Text>
      </S.Container>
    </div>
    <div>
      <S.Container>
        <S.Title>Primitive & Referencial Equality</S.Title>
        <S.Row>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Primitive:</S.SubTitle>
            {pEquality.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Reference:</S.SubTitle>
            {rEquality.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
        </S.Row>
      </S.Container>
    </div>
    <div>
      <S.Container>
        <S.Title>Shallow vs Strict Referencial Equality</S.Title>
        <S.Row>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Strict Equality:</S.SubTitle>
            {strictEqual.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
          <div className="flex-column-center flex-auto">
            <S.SubTitle>Shallow Equality:</S.SubTitle>
            {shallowEqual.map((value) => (
              <S.Text>{value}</S.Text>
            ))}
          </div>
        </S.Row>
      </S.Container>
    </div>
    <div>
      <S.Container>
        <S.Title>React will re-render when</S.Title>
        <ul>
          {reactKey.map((value) => (
            <li style={{ color: '#fff' }}>
              <S.Text>{value}</S.Text>
            </li>
          ))}
        </ul>
        <S.Text>
          Note: React is using Object.is comparison which is very similar to
          strict equality
        </S.Text>
      </S.Container>
    </div>
  </Carousel>
);
