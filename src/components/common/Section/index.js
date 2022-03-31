import { Wrapper, Header, Title, Body } from "./styled"

const Section = ({ title, extraHeaderContent, body }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {extraHeaderContent}
      </Header>
      <Body>
        {body}
      </Body>
    </Wrapper>
  )
}

export default Section