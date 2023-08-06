import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const sayHi: string[] = [
  "Hi",
  "Hello",
  "hey",
  "bonjour",
  "greetings",
  "Yoooooo",
  "ping",
  "안녕하세요",
  "こんばんは",
  "你好",
  "Сайн уу",
  "مرحبًا"
];

function Hero() {
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
  const [currentGreeting, setCurrentGreeting] = useState<string>('');

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;
    let typingInterval: ReturnType<typeof setInterval>;

    const typeAnimation = () => {
      const greeting: string = sayHi[greetingIndex];
      let typedGreeting: string = '';
      let currentIndex: number = 0;

      typingInterval = setInterval(() => {
        typedGreeting += greeting[currentIndex];
        setCurrentGreeting(typedGreeting);
        currentIndex++;

        if (currentIndex === greeting.length) {
          clearInterval(typingInterval);
          typingTimeout = setTimeout(() => {
            const deletingInterval = setInterval(() => {
              typedGreeting = typedGreeting.slice(0, -1);
              setCurrentGreeting(typedGreeting);
              if (typedGreeting === '') {
                clearInterval(deletingInterval);
                setGreetingIndex((prevIndex) => (prevIndex + 1) % sayHi.length);
              }
            }, 100);
          }, 2000);
        }
      }, 100);
    };

    typeAnimation();

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(typingInterval);
    };
  }, [greetingIndex]);

  return (
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
  )
}

export default Hero;

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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
