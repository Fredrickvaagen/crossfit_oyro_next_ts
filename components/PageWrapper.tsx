import styled from '@emotion/styled'
import React from 'react'

type props = {
  children: React.ReactNode
}

const Container = styled.div`
  max-width: 100%;
`

function PageWrapper({ children }: props) {
  return <Container>{children}</Container>
}

export default PageWrapper
