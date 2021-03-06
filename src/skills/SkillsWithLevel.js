import React from 'react'
import PropTypes from 'prop-types'
import './SkillsWithLevel.css'

/**
List of languages

languages is an array of objects [{lang: 'Russian', level: 'native'},]
*/
const SkillsWithLevel = ( props ) => {

  const { title, skills } = props;

  return (
    <div className="skills-with-level">
      <h4>{title}</h4>
      <ul>
        {skills.map((skill ,index)=>(
          <li key={index}>{skill.title}
          {(skill.level)?(<span className="level"> ({skill.level})</span>):''}
          </li>))}
      </ul>
    </div>);
}

SkillsWithLevel.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillsWithLevel
