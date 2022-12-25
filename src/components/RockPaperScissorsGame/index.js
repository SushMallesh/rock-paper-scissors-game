import {Component} from 'react'

import {Popup} from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameChoice from '../GameChoice'

import {
  AppContainer,
  ResponsiveContainer,
  ScoreContainer,
  ChoicesTextContainer,
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
} from './styledComponents'
import {ChoiceImage} from '../GameChoice/styledComponents'

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
  state = {isGameOver: false, yourChoice: ''}

  onSelectChoice = yourChoice => {
    this.setState({isGameOver: true, yourChoice})
  }

  renderGameResultsView = () => {
    const {yourChoice} = this.state

    const opponentChoice = Math.floor(Math.random() * 3)

    return (
      <GameResultsContainer>
        <Player>You</Player>
        <ChoiceImage src={yourChoice} alt="your choice" />
        <Player>You</Player>
        <ChoiceImage src={yourChoice} alt="opponent choice" />
        <PlayAgain type="button">Play Again</PlayAgain>
      </GameResultsContainer>
    )
  }

  renderGameChoices = () => (
    <ChoicesContainer>
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
    const {isGameOver} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreContainer>
            <ChoicesTextContainer>
              <ChoiceText>Rock</ChoiceText>
              <ChoiceText>Paper</ChoiceText>
              <ChoiceText>Scissors</ChoiceText>
            </ChoicesTextContainer>
            <ScoreCard as="div">
              <ScoreText>Score</ScoreText>
              <ScoreValue>0</ScoreValue>
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
