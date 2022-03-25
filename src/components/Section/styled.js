import styled from "styled-components"

export const Wrapper = styled.section`
  background: white;
  border-radius: ${props => props.theme.space.big}px;
  box-shadow: 0 4px 8px ${props => props.theme.color.secondaryDetail};
  margin-bottom: ${props => props.theme.space.big}px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.color.mainBackground};

  @media (max-width: ${props => props.theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    align-items: unset;
  }
`

export const Title = styled.h2`
  padding: ${props => props.theme.space.big}px;
  margin: 0;
`

export const Body = styled.div`
padding: ${props => props.theme.space.big}px;
`
