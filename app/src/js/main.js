
import { render, h } from 'preact' // eslint-disable-line

import App from '@js/components/App' // eslint-disable-line
import style from '@sass/style.scss' // eslint-disable-line


window.onload = () => {
  const loader = document.querySelector('.loader')
  loader.classList.add('loaded')
  setTimeout(() => loader.remove(), 1000)

  render(
    <App />,
    document.getElementById('app')
  )
}
