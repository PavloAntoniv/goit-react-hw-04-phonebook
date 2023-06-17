import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 600px;
  margin: 32px auto;

  border-radius: 15px;
  box-shadow: 2px 2px 15px 8px #eeafe9;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: rgb(5, 69, 69);
  text-align: center;
  background-color: rgb(227, 248, 248);
  box-shadow: 2px 2px 10px 3px #afeed4;

  padding: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  color: rgb(5, 69, 69);
  text-align: center;
  background-color: rgb(227, 248, 248);
  box-shadow: 2px 2px 10px 3px #afeed4;
`;

export { Container, Section, Title };
