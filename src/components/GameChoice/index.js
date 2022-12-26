import {ListItem, ChoiceButton, ChoiceImage} from './styledComponents'

const GameChoice = props => {
  const {choice, onSelectChoice} = props
  const {id, imageUrl} = choice

  const onClickChoiceButton = () => {
    onSelectChoice(imageUrl, id)
  }

  let testId

  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'SCISSORS') {
    testId = 'scissorsButton'
  } else {
    testId = 'paperButton'
  }

  return (
    <ListItem>
      <ChoiceButton
        data-testid={testId}
        as="button"
        onClick={onClickChoiceButton}
        type="button"
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default GameChoice
