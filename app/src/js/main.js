
import { render, h } from 'preact'; // eslint-disable-line

import style from "@sass/style.scss" // eslint-disable-line
import CarouselInterface from "@js/components/CarouselInterface" // eslint-disable-line
import projects from "@js/models/data"

render(
  <CarouselInterface data={projects}/>,
  document.getElementById('app')
)

