import {ListItem, ChoiceButton, ChoiceImage} from './styledComponents'

const GameChoice = props => {
  const {choice, onSelectChoice} = props
  const {id, imageUrl} = choice

  const onClickChoiceButton = () => {
    onSelectChoice(imageUrl)
  }

  return (
    <ListItem>
      <ChoiceButton onClick={onClickChoiceButton} type="button">
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default GameChoice
