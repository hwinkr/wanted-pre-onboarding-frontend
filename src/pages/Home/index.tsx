import { styled } from 'styled-components';
import { useRouter } from '../../hooks';
import Button from '../../components/Button';

const Home = () => {
  const { routerTo } = useRouter();
  return (
    <Container>
      <Title>Todo List</Title>
      <ButtonContainer>
        <Button onClick={() => routerTo('/signin')}>로그인</Button>
        <Button onClick={() => routerTo('/signup')}>회원가입</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 3em;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;

  margin-top: 30px;
`;
