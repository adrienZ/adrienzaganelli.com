import { Component, h } from 'preact' // eslint-disable-line

export default class Post extends Component {
  render() {
    return (
      <section class="post">
        <header class="post__header">
          <a href="#" class="btn">See website</a>
        </header>
        <div id="mardownContainer"></div>
      </section>
    )
  }

  componentDidMount() {
    this.base.querySelector('#mardownContainer').innerHTML = this.props.expandedView
    window.scroll({
      top: this.base.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }
}
