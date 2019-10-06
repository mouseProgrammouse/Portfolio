import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
Social media aside menu

menuItems is an array of objects [{SM: 'GitHub', link: 'github...', className: "fa fa-github-alt"},...]
*/

const SocialAsideMenu = (props) => {

  const { socialMediaItems } = props;

  return (
    <aside className="social-media-menu">
      <ul>
        SocialAsideMenu
      </ul>
    </aside>
  );
}

SocialAsideMenu.propTypes = {
  socialMediaItems: PropTypes.array.isRequired
}

export default SocialAsideMenu
