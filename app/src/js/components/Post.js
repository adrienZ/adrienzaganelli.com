import { Component, h } from 'preact' // eslint-disable-line
import Sticky from 'react-sticky-el' // eslint-disable-line
import { doFill } from '@js/models/utils'
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line

export default class Post extends Component {
  render() {
    return (
      <section class="post">
        <div class={`post__wire ${doFill(this.props.expandedView)}`}></div>
        <div class={`post__wire--end ${doFill(this.props.expandedView)}`}></div>
        <Sticky>
          <header class="post__header">
            <button class="btn" onClick={this.props.onClosePost}>EXIT</button>
            <ExternalLink href={this.props.project.link} class="btn">See website</ExternalLink>
          </header>
        </Sticky>
        <div id="mardownContainer"></div>
        <div class="post__collaborators">
          {this.props.project.collaborators.map( c =>
            <div class="post__collaborator">
              <p>{c.role}</p>
              <ExternalLink href={c.link}>{c.fullname}</ExternalLink>
            </div>
          )}
        </div>
        <footer class="post__footer">
          <div class="post__footer--prev">
            <p>previous project: {this.props.previousProject.name}</p>
          </div>
          <div class="post__footer--next">
            <p>next project: {this.props.nextProject.name}</p>
          </div>
        </footer>
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
