import { Component, h } from 'preact' // eslint-disable-line
import { doFill } from '@js/models/utils'

export default class Post extends Component {
  render() {
    return (
      <section class="post">
        <div class={`post__wire ${doFill(this.props.expandedView)}`}></div>
        <div class={`post__wire--end ${doFill(this.props.expandedView)}`}></div>
        <header class="post__header">
          <button class="btn" onClick={this.props.onClosePost}>EXIT</button>
          <a href={this.props.project.link} class="btn">See website</a>
        </header>
        <div id="mardownContainer"></div>
        <div class="post__collaborators">
          {this.props.project.collaborators.map( c =>
            <div class="post__collaborator">
              <p>{c.role}</p>
              <a href={c.link}>{c.fullname}</a>
            </div>
          )}
        </div>
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
