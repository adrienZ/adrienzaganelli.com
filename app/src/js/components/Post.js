import { Component, h } from 'preact' // eslint-disable-line
import Sticky from 'react-sticky-el' // eslint-disable-line
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line
import SmoothScroll from 'smooth-scroll'

const scroll = new SmoothScroll()

export default class Post extends Component {
  constructor() {
    super()
    this.state.modal = {}
  }

  render() {
    return (
      <section
        class="post"
        onWheel={this.onScrollHandler.bind(this)}>

        { this.state.modal.open &&
          <section class="post__modal" onClick={this.closeModal.bind(this)} >
            <p></p>
            <img class="post__modal--img" src={this.state.modal.src} />
          </section>
        }
        <Sticky>
          <header class="post__header">
            <button class="btn" onClick={this.props.onClosePost}>CLOSE</button>
            <ExternalLink href={this.props.project.link} class="btn">WEBSITE</ExternalLink>
          </header>
        </Sticky>
        <div id="blogPostContainer">
          {this.props.expandedView}
        </div>
        <div class="post__collaborators">
          {this.props.project.collaborators.map( c =>
            <div class="post__collaborator">
              <p>{c.role}</p>
              <ExternalLink href={c.link}>{c.fullname}</ExternalLink>
            </div>
          )}
        </div>

        Other project
        <footer class="post__footer">
          <div class="post__footer--prev">
            {this.props.previousProject.name}
          </div>
          <div class="post__footer--next">
            {this.props.nextProject.name}
          </div>
        </footer>
      </section>
    )
  }

  openModal(e) {
    e.stopPropagation()
    this.setState({
      modal: {
        src: e.target.src,
        open: true
      },
    })
  }

  closeModal() {
    this.setState({
      modal: {}
    })
  }

  onScrollHandler() {
    document.body.scrollTop < this.base.offsetTop
      ?  document.body.querySelector('.app-to-top').classList.add('hide')
      :  document.body.querySelector('.app-to-top').classList.remove('hide')
  }

  componentDidMount() {
    scroll.animateScroll(this.base.offsetTop, { easing: 'easeInOutQuart' })

    Array.from(this.base.querySelectorAll('#blogPostContainer img')).map( img =>
      img.addEventListener('click', this.openModal.bind(this))
    )
  }
}
