import React from 'react'
import styled from 'styled-components'
import background from '../../Assets/background.jpeg'

const Wrapper = styled.div`
  min-height: 200px;
  background: url(${background}) center center no-repeat fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CopyRightText = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.2s;
  margin: 0 15px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 580px) {
    font-size: 2rem;
  }
`

const Footer = () => (
  <Wrapper>
    <div>
      <CopyRightText>
        &copy; 2019 Sami Abrahim. All rights reserved.
      </CopyRightText>
      <LinksWrapper>
        <Link href='https://www.instagram.com/_sam_sosa_/' className='fa fa-instagram fa-3x' />
        <Link href='https://www.snapchat.con/add/sam_a1' className='fa fa-snapchat-ghost fa-3x' />
        <Link href='https://github.com/sabrahim10' className='fa fa-github fa-3x' />
      </LinksWrapper>
    </div>
  </Wrapper>
)

export default Footer
