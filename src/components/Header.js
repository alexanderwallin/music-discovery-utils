import { h, Component } from 'preact'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-end;
  margin-bottom: 32px;
  padding: 16px 0 8px;
  border-bottom: 1px solid whitesmoke;
`

const Title = styled.div`
  margin-right: 56px;
  font-weight: bold;
  color: navy;
`

const Navigation = styled.nav`
  display: flex;
`

const NavigationLink = styled(Link)`
  display: block;
  margin-right: 24px;
  color: slategray;
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;
  text-transform: uppercase;

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

        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/link-lists">Track pursuit</NavigationLink>
        </Navigation>
      </HeaderContainer>
    )
  }
}

export default Header
