import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const greetingMessages: string[] = [
  "Hi.",
  "Hello!",
  "hey!",
  "bonjour!",
  "greetings!",
  "Yoooooo!",
  "ping.",
  "안녕하세요!",
  "こんばんは。",
  "你好。",
  "Сайн уу.",
  "مرحبًا"
];

function Hero() {
  // 상태 변수
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
  const [currentGreeting, setCurrentGreeting] = useState<string>('');

  useEffect(() => {
    // 타이핑 및 삭제에 사용되는 타이머 변수들
    let typingTimeout: ReturnType<typeof setTimeout>;
    let typingInterval: ReturnType<typeof setInterval>;

    const typeAnimation = () => {
      // 현재 출력할 인삿말을 가져옴
      const greeting: string = greetingMessages[greetingIndex];
      let typedGreeting: string = '';
      let currentIndex: number = 0;

      // 타이핑 애니메이션 실행
      typingInterval = setInterval(() => {
        typedGreeting += greeting[currentIndex];
        setCurrentGreeting(typedGreeting);
        currentIndex++;

        // 타이핑이 완료된 경우
        if (currentIndex === greeting.length) {
          clearInterval(typingInterval);

          // 2초 후 삭제 애니메이션 실행
          typingTimeout = setTimeout(() => {
            // 삭제 애니메이션
            const deletingInterval = setInterval(() => {
              typedGreeting = typedGreeting.slice(0, -1);
              setCurrentGreeting(typedGreeting);
              if (typedGreeting === '') {
                clearInterval(deletingInterval);
                // 다음 인삿말로 이동
                setGreetingIndex((prevIndex) => (prevIndex + 1) % greetingMessages.length);
              }
            }, 100);
          }, 2000);
        }
      }, 100);
    };

    // 타이핑 애니메이션 시작
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
