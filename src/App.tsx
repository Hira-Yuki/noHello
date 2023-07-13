import styled from 'styled-components';
import Hero from './Components/Hero';
import Donotthis from './Components/Donotthis';
import Dothis from './Components/Dothis';

function App() {

  return (
    <StContainer>
      <Hero />
      <StDoNotContainer>
        <Donotthis />
      </StDoNotContainer>
      <StDoThisContainer>
        <Dothis />
      </StDoThisContainer>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  margin: 60px auto;
  max-width: 1100px;
`;

const StDoNotContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

const StDoThisContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`