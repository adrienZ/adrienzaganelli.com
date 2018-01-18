import { Component, h } from 'preact' // eslint-disable-line
import Sticky from 'react-sticky-el' // eslint-disable-line
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line
import SmoothScroll from 'smooth-scroll'
import Router from '@js/models/router'
import { footerSvg } from '../models/utils';

const Waypoint = window.Waypoint
const router = new Router({})
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
          <section class="post__modal animated fadeIn" onClick={this.closeModal.bind(this)} >
            <p></p>
            <img class="post__modal--img animated fadeIn" src={this.state.modal.src} />
          </section>
        }
        <Sticky>
          <header class="post__header">
            <div class="post__header--links">
              <button class="btn close" onClick={this.props.onClosePost}>CLOSE</button>
              <ExternalLink href={this.props.project.link} class="btn visit">WEBSITE</ExternalLink>
            </div>
            <h4 class="post__header--title">{this.props.project.name}</h4>
            <div class="post__header--controls">
              <button class="btn" onClick={this.previous.bind(this)}>PREVIOUS</button>
              <button class="btn" onClick={this.next.bind(this)}>NEXT</button>
            </div>
          </header>
        </Sticky>
        <div id="blogPostContainer"></div>
        <div class="post__collaborators">
          {this.props.project.collaborators.map( c =>
            <div class="post__collaborator">
              <p>{c.role}</p>
              <ExternalLink href={c.link}>{c.fullname}</ExternalLink>
            </div>
          )}
        </div>

        <footer class="post__footer">
          <p class="post__footer--legend">Other Project</p>
          <button class="post__footer--prev" onClick={this.footerPrevious.bind(this)}>
            {this.props.previousProject.name}
          </button>
          <button class="post__footer--next" onClick={this.footerNext.bind(this)}>
            {this.props.nextProject.name}
          </button>
        </footer>
        <div class="post__footer--end">
          {h(footerSvg)}
        </div>
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

  next() {
    this.props.carouselMethods.next()
    this.props.onClosePost()
  }

  previous() {
    this.props.carouselMethods.previous()
    this.props.onClosePost()
  }

  refreshImportedDom() {
    this.base.querySelector('#blogPostContainer').innerHTML = this.props.expandedView
    scroll.animateScroll(this.base.offsetTop, { easing: 'easeInOutQuart' })

    Array.from(this.base.querySelectorAll('#blogPostContainer img')).map( img => {
      img.classList.add('animated')
      img.addEventListener('click', this.openModal.bind(this))
      img.onload = function() {
        new Waypoint({
          element: img,
          handler: () => img.classList.add('fadeIn'),
          offset: 150 + img.height * 1.5
        })
      }
    })

    Array.from(this.base.querySelectorAll('#blogPostContainer a')).map(link => {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    })
  }

  footerPrevious() {
    this.props.carouselMethods.onClosePost()
    this.props.carouselMethods.setPosition(this.props.previousProject.index + 1)
  }

  footerNext() {
    this.props.carouselMethods.onClosePost()
    this.props.carouselMethods.setPosition(this.props.nextProject.index + 1)
  }

  componentDidMount() {
    // this.props.carouselMethods.previous()
    this.refreshImportedDom()
    router.setRoute(`projects/${this.props.project.slug}`)
  }
}
