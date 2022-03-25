import { Wrapper, Header, Title, Body } from "./styled"

const Section = props => {
  return (
    <Wrapper>
      <Header>
        <Title>{props.title}</Title>
        {props.extraHeaderContent}
      </Header>
      <Body>
        {props.body}
      </Body>
    </Wrapper>
  )
}

export default Section