import styled from 'styled-components'

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
