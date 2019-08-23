import React from 'react'
import PropTypes from 'prop-types'
import { bounceInLeft } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

const Wrapper = styled.p`
  width: 70%;
  line-height: 1.6;
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
  @media (max-width: 876px) {
    width: 100%;
    order: 1;
  }
`

const SkillsetLink = styled.span`
  text-decoration: underline;
  color: dodgerblue;
  cursor: pointer;
`

const Paragraph = props => (
  <Wrapper active={props.active}>
    Proficient in Microsoft Word and Excel. Exemplary problem-solving skills;
    able to identify problems and implement the corrective processes. Skilled at
    presenting technical and abstract concepts in a clear and concise way.
    Strong communication, interpersonal, and presentational skills. Strong
    leadership skills; able to prioritize, delegate tasks, and make sound
    decisions quickly while maintaining a focus on the bottom line. I am seeking
    an opportunity to learn by doing. You can check my{' '}
    <Link to='skillset' spy smooth>
      <SkillsetLink>full skills set here</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href='https://github.com/sabrahim10'
      target='_blank'
      rel='noopener noreferrer'
      style={{ color: 'dodgerblue' }}
    >
      github
    </a>{' '}
    and{' '}
    <a
      href='https://www.linkedin.com/in/sami-abrahim-304401142/'
      target='_blank'
      rel='noopener noreferrer'
      style={{ color: 'dodgerblue' }}
    >
      Linkedin
    </a>{' '}
    for my projects! &lt;3
  </Wrapper>
)

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Paragraph
