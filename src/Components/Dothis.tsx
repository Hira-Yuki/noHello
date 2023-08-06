import styled from 'styled-components';

function Dothis() {
  return (
    <StContentsBox>
      <StSectionLeft>
        <StSectionTilte>
          ✅ 대신 이렇게 해보세요.
        </StSectionTilte>
        <StSmallBox>
          <div>
            <StChatName>정훈</StChatName>  <StChatTime> 2:15 PM</StChatTime>
            <br />
            <StChatMassage>
              민준님 안녕하세요! 오늘 미팅 어느 회의실에서 하는지 알려주시겠어요?
            </StChatMassage>
          </div>
          <br />
          <div>
            <StChatName>민준</StChatName>  <StChatTime> 2:15 PM</StChatTime>
            <br />
            <StChatMassage>
              네, 3F 회의실에서 3시에요.
            </StChatMassage>
          </div>
          <br />
          <div>
            <StChatName>정훈</StChatName>  <StChatTime> 2:15 PM</StChatTime>
            <br />
            <StChatMassage>
              오! 감사합니다.
            </StChatMassage>
          </div>
          <br />
          <div>
            <StChatName>민준</StChatName>  <StChatTime> 2:16 PM</StChatTime>
            <br />
            <StChatMassage>
              네, 이따 뵐게요.
            </StChatMassage>
          </div>
        </StSmallBox>
      </StSectionLeft>
      <StSectionRight>
        <StSectionText>
          단순히 "안녕하세요"라고 인사하고 질문하는 것이 다소 무뚝뚝하다고 느껴지더라도 <strong>메시지 서두에 원하는 만큼의 인사말을 넣을 수 있습니다.</strong>
        </StSectionText>
        <StSectionText>
          예를 들면 다음과 같습니다:
        </StSectionText>
        <StNonoUl>
          <StNonoLi>
            안녕하세요, 오늘 지시하신 업무 몇시까지 처리하면 되나요?
          </StNonoLi>
          <StNonoLi>
            잘 지내시나요? 다름 아니라 최신 문서를 찾고 있는데 시간이 되시면 도와주실 수 있나요?
          </StNonoLi>
          <StNonoLi>
            바쁘지 않으시다면 이 자료 업데이트를 요청드려도 될까요?
          </StNonoLi>
          <StNonoLi>
            등등
          </StNonoLi>
        </StNonoUl>
        <StSectionText>
          사소해 보일 수 있지만, 첫 인사말을 받기 전에 질문을 하면 비동기식 커뮤니케이션이 가능합니다.
          상대방이 자리를 비운 상태에서 내가 먼저 자리를 비운 후 상대방이 돌아오면,
          상대방은 "안녕하세요"라는 인사말만 보고 무엇을 놓쳤는지 궁금해하지 않고 질문에 답할 수 있습니다.
        </StSectionText>
        <StSectionText>
          이대로만 한다면 모두가 행복해집니다! 🎉
        </StSectionText>
      </StSectionRight>
    </StContentsBox>
  )
}

export default Dothis

const StSectionTilte = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
`

const StSectionLeft = styled.div`
  flex: 1;
  min-width: 300px; /* 원하는 최소 너비 설정 */
  padding-left: 20px;
  padding-right: 20px;
`

const StSmallBox = styled.div`
  -moz-box-shadow: 0px 0px 29px -4px rgba(0, 0, 0, 0.46);
  margin: 30px 80px 0 0;
  padding: 25px 25px 10px 25px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: -20px 20px 60px #d9d9d9, 20px -20px 60px #ffffff;
`

const StChatName = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #1d1c1d;
`
const StChatTime = styled.span`
  font-size: 14px;
  color: #616061;
`

const StChatMassage = styled.span`
  font-size: 16px;
  color: #1d1c1d;
`

const StContentsBox = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StSectionRight = styled.div`
  flex: 1;
  min-width: 300px; /* 원하는 최소 너비 설정 */
  padding-left: 20px;
  padding-right: 20px;
`

const StSectionText = styled.p`
  font-size: 18px;
  color: #616061;
  line-height: 24px;
  margin-bottom: 22px;
`

const StNonoUl = styled.ul`
  list-style: none;
  font-size: 18px;
  color: #616061;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 20px;
  margin-top: -20px;
  opacity: 70%;
`
const StNonoLi = styled.li`
  list-style-type: none;

  &:before {
    content: '✓';
    font-size: 14px;
    font-weight: bold;
    color: green;
    padding-right: 10px;
    opacity: 100% !important;
  }
`