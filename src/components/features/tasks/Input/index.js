import styled from "styled-components"

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: ${props => props.theme.space.normal}px;
  padding: ${props => props.theme.space.normal}px;
`

export default Input