import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const seyHi = [
  "Hi.",
  "Hello!",
  "hey!",
  "bonjour!",
  "greetings!",
  "Yoooooo!",
  "안녕하세요!",
  "ping",
];

function App() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState('');

  useEffect(() => {
    const typeAnimation = () => {
      const greeting = seyHi[greetingIndex];
      let typedGreeting = '';
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        typedGreeting += greeting[currentIndex];
        setCurrentGreeting(typedGreeting);
        currentIndex++;

        if (currentIndex === greeting.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setGreetingIndex((prevIndex) => (prevIndex + 1) % seyHi.length);
          }, 2000);
        }
      }, 100);
    };

    typeAnimation();

    // return () => {
    //   // clearTimeout();
    //   // clearInterval();
    // };
  }, [greetingIndex]);

  return (
    <StContainer>
      <StHero>
        <StName className='name'>
          no <StStrike id='strike'>{currentGreeting}</StStrike><span id='blink'>|</span>
        </StName>
        <StSubTitle>채팅으로 인사만하지 마세요.</StSubTitle>
        <StLead className='lead'>
          누군가에게 전화를 건다고 상상해보세요<em>!</em>
          <em>"안녕하세요."</em>
          라고 한 뒤 아무말도 하지 않고 기다린다면... 🤦‍♀️
        </StLead>
      </StHero>
      <div>
        <h2>
          ❌ 이렇게 하지마세요.
        </h2>
      </div>
    </StContainer>
  );
}

export default App;

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const StContainer = styled.div`
  margin: 60px auto;
  max-width: 1100px;
`;

const StHero = styled.div`
  margin: 150px auto 200px auto;
  position: relative;
`;

const StName = styled.div`
  font-size: 94px;
  font-weight: 700;
  display: inline-block;
  text-decoration-color: #fff;

  #blink {
    animation: ${blinkAnimation} 1s infinite;
  }
`;

const StStrike = styled.span`
  text-decoration: line-through;
  text-decoration-color: red;
`;

const StSubTitle = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 300;
  color: #81899c;
  margin-top: 10px;
`;

const StLead = styled.h2`
  font-size: 44px;
  font-weight: 300;
  margin-top: 60px;
  line-height: 55px;
`;
