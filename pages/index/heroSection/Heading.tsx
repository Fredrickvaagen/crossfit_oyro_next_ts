import styled from '@emotion/styled'
import React from 'react'

export const H1 = styled.h1`
  font-size: 5.5rem;
  color: black;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  font-family: 'Oswald', sans-serif;
  @media (max-width: 960px) {
    font-size: 3.5rem;
    justify-content: center;
    display: flex;
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
  font-family: 'Oswald', sans-serif;

  @media (max-width: 960px) {
  }
  @media (max-width: 768px) {
  }
`

export default function Heading() {
  return (
    <>
      <H1>CrossFit Øyro</H1>
      <Paragraph>Community - Kvalitet - Treningsglede - Mestring</Paragraph>
    </>
  )
}
