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
  border: 2px solid #ffffff;
  border-radius: 10px;
`

export const ChoiceText = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Bree Serif';
  font-weight: normal;
  width: 100px;
  padding-left: 20px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  height: 100px;
  width: 120px;
  color: #223a5f;
  margin-right: 20px;
  margin-top: 20px;
  line-height: 0;
  @media (min-width: 768px) {
    height: 120px;
    width: 150px;
  }
`
export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const ScoreValue = styled.p`
  font-size: 32px;
  margin-top: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 48px;
  }
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
  width: 300px;
  height: 200px;

  @media (min-width: 768px) {
    width: 500px;
    height: 400px;
  }
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  align-self: flex-end;
  color: #223a5f;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Bree Serif';
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 40px;
`
export const GameRules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  width: 80%;
  @media (min-width: 768px) {
    width: 80%;
  }
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
  width: 50%;
  @media (min-width: 767px) {
    width: 100%;
  }
`
export const GameResultsContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 70%;
  @media (min-width: 768px) {
    width: 55%;
  }
`
export const Player = styled(ScoreText)`
  font-size: 20px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const PlayAgain = styled(RulesButton)`
  padding: 15px 40px 15px 40px;
  margin-top: 0;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
`

export const GameResultText = styled.p`
  font-size: 28px;
  color: #ffffff;
  font-weight: 700;
  margin-left: 30px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`

// game choice
export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
`

export const ChoiceButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
`
export const ChoiceImage = styled.img`
  height: 80px;
  width: 80px;

  @media (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
