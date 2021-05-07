import React from 'react'

const SocialLinks = ({ social }) => {
  return (
    <ul className='social-icons'>
      {social.map((soc) => {
        const { id, url, icon } = soc
        return (
          <li key={id}>
            <a href={url} target='_blank' rel='noreferrer'>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
