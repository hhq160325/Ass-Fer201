import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation () {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav
        className='NavHeader d-flex justify-content-between '
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul className='Tabpanel'>
          <li>
            <a
              className='active Links'
              href='#home'
              style={{ color: theme.color }}
            >
              Home
            </a>
          </li>
          <li>
            <a className='Links' href='#news' style={{ color: theme.color }}>
              News
            </a>
          </li>
          <li>
            <a className='Links' href='#about' style={{ color: theme.color }}>
              About
            </a>
          </li>
          <li>
            <a className='Links' href='#contact' style={{ color: theme.color }}>
              Contact
            </a>
          </li>
        </ul>
        <div className='ThemeBtn'>
          <a
            className='switch-mode Themebtn'
            href='#'
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }}
            data-testid='toggle-theme-btn'
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  )
}
