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
    title: 'Information Systems and Technology Mentoring Club',
    description:
      'Serving as the Treasurer of the club, Manage the budget and make sure money is being spent well throughout the organization. Organize events about uprising technologies and have guest speakers from different companies speak. '
  },
  {
    title: 'Inter Fraternal Council ',
    description:
      'Served as the Chief Marketing Officer in 2018. Develop and execute public relations and social media strategy. Collect and report member fraternity community service hours, philanthropic dollars, and activities.'
  },
  {
    title: 'UMSL|HACK',
    description:
      'Core member of the UMSL|HACK team. Currently in charge of rasining funds to support this FREE event for sturdents to expand their knowledge.'
  },
  {
    title: 'Sigma Tau Gamma',
    description:
      'Served as Head of the Standard Board, kept track of issues that were ongoing and implement new strategies to help with current problems in the organization. '
  },
  {
    title: 'Delta Sigma Pi',
    description:
      'Serving as the Scholarships and Award on the Executive Committee and the Web master of the Delta Sigma Pi website. Organize funraisers and recognize individuals for their good work.'
  }

]

const Cards = Projects.map(project => (
  <Card
    title={project.title}
    description={project.description}
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
