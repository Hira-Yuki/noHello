import styled from 'styled-components';

function Donotthis() {
  return (
      <StContentsBox>
        <StSectionLeft>
          <StSectionTilte>
            ❌ 이렇게 하지마세요.
          </StSectionTilte>
          <StSmallBox>
            <div>
              <StChatName>정훈</StChatName>  <StChatTime> 2:15 PM</StChatTime>
              <br />
              <StChatMassage>
                민준님 안녕하세요!
              </StChatMassage>
            </div>
            <br />
            <div>
              <StChatName>민준</StChatName>  <StChatTime> 2:20 PM</StChatTime>
              <br />
              <StChatMassage>
                네, 안녕하세요!
              </StChatMassage>
            </div>
            <br />
            <div>
              <StChatName>정훈</StChatName>  <StChatTime> 2:21 PM</StChatTime>
              <br />
              <StChatMassage>
                회의실 예약이 몇시인지 확인해 주시겠어요?
              </StChatMassage>
            </div>
            <br />
            <div>
              <StChatName>민준</StChatName>  <StChatTime> 2:22 PM</StChatTime>
              <br />
              <StChatMassage>
                예, 3시네요!
              </StChatMassage>
            </div>
          </StSmallBox>
        </StSectionLeft>
        <StSectionRight>
          <StSectionText>
            정훈은 몇 분 더 빨리 답을 얻을 수도 있었고 민준을 기다리게 할 필요도 없었을 것입니다.
            사실 민준은 바로  질문에 대한 생각을 시작할 수도 있었을 것입니다!
          </StSectionText>
          <StSectionText>
            이렇게 하는 사람들은 일반적으로 직접 대면하거나 전화할 때처럼 용건을 즉시 말하지 않음으로써 예의를 지키려고 노력합니다, 이는 매우 좋은 일입니다!
            하지만 지금은 2023년이고 채팅은 그 어느 것도 아닙니다. 대부분의 사람들에게 타이핑은 말하는 것보다 훨씬 느립니다. 따라서 좋은 의도에도 불구하고 실제로는 상대방이 질문을 입력할 때까지 기다려야 하므로 생산성이 떨어지고 짜증이 나기도 합니다.
          </StSectionText>
          <StSectionText>
            다음과 같은 질문도 마찬가지입니다:
          </StSectionText>
          <StNonoUl>
            <StNonoLi>
              안녕하세요, 자리에 계세요?
            </StNonoLi>
            <StNonoLi>
              안녕하세요 정훈님, 간단한 질문 있는데요.
            </StNonoLi>
            <StNonoLi>
              잠시 시간되세요?
            </StNonoLi>
            <StNonoLi>
              똑똑..
            </StNonoLi>
            <StNonoLi>
              등등
            </StNonoLi>
          </StNonoUl>
          <StSectionText><strong>그냥 물어보세요!</strong> 😫</StSectionText>
        </StSectionRight>
      </StContentsBox>
  )
}

export default Donotthis

const StSectionTilte = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
`

const StSectionLeft = styled.div`
  width: 40%;
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
`

const StSectionRight = styled.div`
margin-top: 45px;
  width: 59%;
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
    content: '×';
  color: red;
  font-weight: bold;
  padding-right: 10px;
  opacity: 100% !important;
  }
`