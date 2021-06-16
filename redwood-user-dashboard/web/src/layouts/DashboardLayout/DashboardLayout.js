import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

const DashboardLayout = ({ children }) => {
  return (
    <FlexBox>
      <SideNav>
        <LinkContainer>
          <Link to={routes.users()}>Users</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={routes.alerts()}>Alerts</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={routes.teams()}>Teams</Link>
        </LinkContainer>
      </SideNav>
      <FullPage>{children}</FullPage>
    </FlexBox>
  )
}

const FlexBox = styled.div`
  display: flex;
`

const FullPage = styled.div`
  height: 100vh;
  width: 100%;
`

const LinkContainer = styled.div`
  padding: 12px;

  > * {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  > *:hover {
    color: #5B5B5B;
  }
`

const SideNav = styled.nav`
  border-right: 1px solid;
  width: 250px;
`

export default DashboardLayout
