import React from 'react'

const Links = ({ links, linksRef }) => {
  return (
    <ul className='links' ref={linksRef}>
      {links.map((link) => {
        const { id, url, text, icon } = link
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Links
