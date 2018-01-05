import { Component, h } from 'preact' // eslint-disable-line

export default class Post extends Component {
  render() {
    return (
      <section class="post">
      </section>
    )
  }

  componentDidMount() {
    this.base.innerHTML = this.props.expandedView
  }
}
