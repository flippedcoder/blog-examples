import styled from 'styled-components'

const DashboardLayout = ({ children }) => {
  return (
    <FlexBox>
      <SideNav></SideNav>
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

const SideNav = styled.nav`
  border-right: 1px solid;
  width: 250px;
`

export default DashboardLayout
