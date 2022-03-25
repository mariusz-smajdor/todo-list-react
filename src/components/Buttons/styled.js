import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;

  @media (max-width: ${props => props.theme.breakpoint.mobileMax}px) {
    padding-top: 0;
    flex-direction: column;
  }
`

export const Button = styled.button`
  border: unset;
  background: unset;
  color: ${props => props.theme.color.mainDetail};
  font-weight: bold;
  transition: filter 1s;

  &:hover {
    filter: brightness(110%);
  cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${props => props.theme.color.disabled};
  }
`