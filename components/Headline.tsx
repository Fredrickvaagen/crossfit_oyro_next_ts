import styled from '@emotion/styled'
import React from 'react'

export const H1 = styled.h1`
  font-size: 5.5rem;
  color: black;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1rem;
  @media (max-width: 960px) {
    font-size: 4.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
  }
  @media (max-width: 768px) {
  }
`

export default function Headline() {
  return (
    <>
      <H1>CrossFit Øyro</H1>
      <Paragraph>Community - Kvalitet- Treningsglede - Mestring</Paragraph>
    </>
  )
}
