import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 0 0 16px;
  color: navy;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
`

export const UnstyledButton = styled.button`
  appearance: none;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  line-height: inherit;
  text-align: inherit;
`

export const Button = UnstyledButton.extend`
  display: inline-block;
  padding: 12px 32px;
  border-radius: 4px;
  background-color: navy;
  color: whitesmoke;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  &[disabled] {
    opacity: 0.75;
    cursor: default;
  }
`
