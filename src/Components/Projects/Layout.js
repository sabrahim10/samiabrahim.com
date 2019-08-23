import React from 'react'
import styled, { keyframes } from 'styled-components'
import Waypoint from 'react-waypoint'
import PropTypes from 'prop-types'
import { bounceInRight } from 'react-animations'
import Card from './Card'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
  animation: ${props => (props.active ? keyframes`${bounceInRight}` : '')} 1s;
`

const Projects = [
  {
    title: 'Information Systems Technology Mentoring Club ',
    description:
      'A powerful Vitrual Reality applicating created unity Unity for educators to have quality training in active shooter situations',
    link: 'https://github.com/CIRR14/DataOrData'
  },
  {
    title: 'foreign Born Help Services ',
    description:
      'Global Hack application to ease the trouble of new immagrants transitioning to the United States',
    link: 'https://github.com/sabrahim10?tab=repositories'
  },
  {
    title: 'uFunny',
    description:
      'Allowed users to create accounts and post their jokes to the board so others who have an account see it. Used Firebase and used RESTful API',
    link: 'https://github.com/sabrahim10?tab=repositories'
  },
  {
    title: 'Polymorphism Porject',
    description:
      'Implemented multiple methods within the same class. Overloaded methods and made sure they were running in their static form',
    link: 'https://github.com/sabrahim10?tab=repositories'
  },
  {
    title: 'Evaluation Project',
    description:
    'Created a GUI for people to submit evaluations of their peers. Used the SQL Derby Client to record the information and store the data.',
    link: 'https://github.com/sabrahim10?tab=repositories'
  },
  {
    title: 'ATM Project',
    description:
      'Created a console application that functioned the same as an ATM. Users created and deleted their accounts and had error handeling for insufficient funds.',
    link: 'https://github.com/sabrahim10?tab=repositories'
  }
]

const Cards = Projects.map(project => (
  <Card
    title={project.title}
    description={project.description}
    link={project.link}
    key={project.title}
  />
))

const Layout = props => (
  <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper active={props.active}>{Cards}</Wrapper>
  </Waypoint>
)

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
}

export default Layout
