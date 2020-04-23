import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to right, #43cea2, #185a9d);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Input = styled.input`
  border: none;
  padding: 1.5rem 2rem;
  border: 1px solid #f1f1f1;
  border-radius: 5rem;
  min-width: 500px;
  outline: none;
  color: #185a9d;
  font-size: 1.4rem;

  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 1.3rem 2.5rem;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: #fff;
  outline: none;
  font-size: 1.4rem;
`;

const Div = styled.div`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 600px;
`;

const Value = styled.p`
  font-size: 3.5rem;
  color: #fff;
  text-transform: capitalize;
`;

const Text = styled.p`
  color: #fff;
  font-size: 2rem;
`;

const Title = styled.p`
  color: #fff;
  font-size: 4rem;
  padding-bottom: 5rem;
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 3rem;
`;

const Row = styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
  width: 100%;
`;

export const S = {
  Wrapper,
  Container,
  Input,
  Button,
  Div,
  Value,
  Text,
  Title,
  Row,
  SubTitle,
};
