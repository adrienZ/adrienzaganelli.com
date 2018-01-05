import { Component, h } from 'preact' // eslint-disable-line
import scrollTo from "scroll-to-js"

export default class Post extends Component {
  render() {
    return (
      <section class="post">
        <header class="post__header">
          <a class="btn">See website</a>
        </header>
        <div id="mardownContainer"></div>
      </section>
    )
  }

  componentDidMount() {
    this.base.querySelector('#mardownContainer').innerHTML = this.props.expandedView
    scrollTo(document.body, this.base.offsetTop, 200)
  }
}
