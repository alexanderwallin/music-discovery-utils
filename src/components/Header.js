import { h, Component } from 'preact'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  margin-bottom: 32px;
  padding: 16px 0 8px;
`

const Title = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  color: navy;
`

const NavigationLink = styled(Link)`
  display: inline-block;
  margin-right: 8px;
  color: slategray;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    color: navy;
  }
`

/**
 * Header
 */
class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Title>
          <span role="img" aria-label="Disco dancer emoji">
            🕺
          </span>{' '}
          Verydisco
        </Title>

        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/link-lists">Track pursuit</NavigationLink>
        </nav>
      </HeaderContainer>
    )
  }
}

export default Header
