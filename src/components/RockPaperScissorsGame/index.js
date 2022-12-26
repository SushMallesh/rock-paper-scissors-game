import {Component} from 'react'

import {Popup} from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameChoice from '../GameChoice'

import {
  AppContainer,
  ResponsiveContainer,
  ScoreContainer,
  ChoiceText,
  ScoreCard,
  ScoreText,
  ScoreValue,
  ChoicesContainer,
  RulesButton,
  RulesContainer,
  GameRules,
  RulesImage,
  CloseButton,
  Player,
  PlayAgain,
  GameResultsContainer,
  ResultsContainer,
  GameResult,
  GameResultText,
  ChoiceImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const rulesImageUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'

class RockPaperScissorsGame extends Component {
  state = {
    isGameOver: false,
    yourChoice: '',
    gameResult: '',
    opponentChoice: '',
    score: 0,
  }

  onClickChoiceButton = event => {
    const yourChoiceId = event.target.alt

    const opponentChoiceIndex = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[opponentChoiceIndex].imageUrl
    const opponentChoiceId = choicesList[opponentChoiceIndex].id
    if (yourChoiceId === opponentChoiceId) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (
      (yourChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') ||
      (yourChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') ||
      (yourChoiceId === 'PAPER' && opponentChoiceId === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    }

    this.setState({
      isGameOver: true,
      yourChoice: event.target.src,
      opponentChoice,
    })
  }

  onSelectChoice = (yourChoice, yourChoiceId) => {
    const opponentChoiceIndex = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[opponentChoiceIndex].imageUrl
    const opponentChoiceId = choicesList[opponentChoiceIndex].id
    if (yourChoiceId === opponentChoiceId) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (
      (yourChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') ||
      (yourChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') ||
      (yourChoiceId === 'PAPER' && opponentChoiceId === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    }

    this.setState({isGameOver: true, yourChoice, opponentChoice})
  }

  onClickPlayAgain = () => {
    this.setState({isGameOver: false})
  }

  renderGameResultsView = () => {
    const {yourChoice, gameResult, opponentChoice} = this.state

    return (
      <GameResultsContainer>
        <ResultsContainer>
          <Player>You</Player>
          <ChoiceImage src={yourChoice} alt="your choice" />
        </ResultsContainer>
        <ResultsContainer>
          <Player>Opponent</Player>
          <ChoiceImage src={opponentChoice} alt="opponent choice" />
        </ResultsContainer>
        <GameResult>
          <GameResultText>{gameResult}</GameResultText>
          <PlayAgain onClick={this.onClickPlayAgain} type="button">
            Play Again
          </PlayAgain>
        </GameResult>
      </GameResultsContainer>
    )
  }

  renderGameChoices = () => (
    <ChoicesContainer>
      {/* <ChoiceButton
        data-testid="rockButton"
        onClick={this.onClickChoiceButton}
        type="button"
      >
        <ChoiceImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </ChoiceButton>
      <ChoiceButton
        data-testid="scissorsButton"
        onClick={this.onClickChoiceButton}
        type="button"
      >
        <ChoiceImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </ChoiceButton>
      <ChoiceButton
        data-testid="paperButton"
        onClick={this.onClickChoiceButton}
        type="button"
      >
        <ChoiceImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </ChoiceButton> */}

      {choicesList.map(choice => (
        <GameChoice
          onSelectChoice={this.onSelectChoice}
          key={choice.id}
          choice={choice}
        />
      ))}
    </ChoicesContainer>
  )

  renderRulesPopup = () => (
    <Popup
      modal
      trigger={
        <RulesButton type="button" as="button">
          Rules
        </RulesButton>
      }
    >
      {close => (
        <RulesContainer>
          <CloseButton
            onClick={() => {
              close()
            }}
            type="button"
          >
            <RiCloseLine size={20} />
          </CloseButton>

          <GameRules>
            <RulesImage src={rulesImageUrl} alt="rules" />
          </GameRules>
        </RulesContainer>
      )}
    </Popup>
  )

  render() {
    const {isGameOver, score} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreContainer>
            <ChoiceText>Rock Paper Scissors</ChoiceText>

            <ScoreCard as="div">
              <ScoreText>Score</ScoreText>
              <ScoreValue>{score}</ScoreValue>
            </ScoreCard>
          </ScoreContainer>
          {!isGameOver && this.renderGameChoices()}
          {isGameOver && this.renderGameResultsView()}
          {this.renderRulesPopup()}
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissorsGame
