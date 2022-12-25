import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding-top: 30px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-bottom: 20px;
`
export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
`

export const ChoicesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
`
export const ChoiceText = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Bree Serif';
  font-weight: normal;
`

export const ScoreCard = styled(ChoicesTextContainer)`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  height: 120px;
  width: 150px;
  color: #223a5f;
`
export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`
export const ScoreValue = styled.p`
  font-size: 48px;
  margin-top: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ChoicesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 100%;
  padding-top: 50px;
  @media (min-width: 768px) {
    width: 70%;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 500px;
  height: 400px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  align-self: flex-end;
  color: 223a5f;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Bree Serif';
  cursor: pointer;
  outline: none;
  border: none;
`
export const GameRules = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  width: 80%;
`
export const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 50px;
  cursor: pointer;
`
export const RulesImage = styled.img`
  width: 100%;
`
export const GameResultsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const Player = styled(ScoreText)`
  font-size: 20px;
`

export const PlayAgain = styled(RulesButton)`
  padding: 15px 24px 15px 24px;
`
