import { Component, h } from 'preact' // eslint-disable-line
import CarouselInterface from "@js/components/CarouselInterface" // eslint-disable-line
import projects from "@js/models/data"
import Post from '@js/components/Post' // eslint-disable-line
import SmoothScroll from 'smooth-scroll'
import { arrowSvg, closeIcon, socialIcons } from '@js/models/utils'
import Router from '@js/models/router'
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line


export default class App extends Component {
  constructor() {
    super()

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    this.state = {
      expandedView: null,
      menu: false,
      about: false
    }
    this.router = new Router({
      'projects': this.preActivateProject.bind(this)
    })
  }

  enableExpandedView(postText, pIndex, onClosePost) {
    this.setState({
      expandedView: postText,
    })

    this.props = Object.assign(this.props, {
      project: projects[pIndex - 1],
      previousProject: projects[pIndex - 2] || projects[projects.length - 1],
      nextProject: projects[pIndex] || projects[0],
      onClosePost
    })
  }

  disableExpandedView() {
    this.backToTop({
      after: () => this.setState({
        expandedView: null,
      })
    }, true)
  }

  backToTop(config = {}, toZero) {
    const post = this.base.querySelector('.post')

    const scrollTop = scroll => scroll.animateScroll(toZero ? 0 : post.offsetTop || 0, {
      easing: 'easeInOutQuart',
    })
    scrollTop(new SmoothScroll(null, config))
    this.base.querySelector('.app-to-top').classList.add('hide')
  }

  preActivateProject() {
    const hashes = window.location.hash.split('/')
    const projectName = hashes.slice(-1)[0]
    let project = projects.filter( p => p.slug === projectName)
    project = project.length ? project[0] : false

    if (project) {
      return projects.indexOf(project) + 1
    }
  }

  easterEgg() {
    this.setState({
      easterEgg: true
    })
    this.carouselMethods.setPosition(0)
  }

  getCarousel(obj) {
    this.carouselMethods = obj
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    })

    this.state.menu
      ? this.carouselMethods.scrollManager.destroy()
      : this.carouselMethods.scrollManager.start()
  }

  toggleAbout() {
    this.setState({
      about: !this.state.about
    })

    this.state.menu
      ? this.carouselMethods.scrollManager.destroy()
      : this.carouselMethods.scrollManager.start()
  }

  loadProject(e) {
    const id = parseInt(e.target.dataset.id)
    if (this.state.expandedView) {
      this.carouselMethods.onClosePost()
    }
    this.carouselMethods.setPosition(id)
    this.toggleMenu()
  }

  render() {
    return (
      <div class="app__container">
        <p onClick={this.easterEgg.bind(this)} class={`brandname animated ${this.state.easterEgg ? 'hinge' : ''}`}>ADRIEN ZAGANELLI</p>

        <div class={`app__menu big-modal ${this.state.menu ? 'open' : ''}`}>
          <button class="close app__menu--close" onClick={this.toggleMenu.bind(this)}>
            {closeIcon()}
          </button>
          <ul class="app__menu--list big-modal__container">
            <li class="app__menu--item" onClick={this.toggleAbout.bind(this)}> CONTACT & ABOUT</li>
            <li data-id="0" onClick={this.loadProject.bind(this)} class="app__menu--item active">HOME</li>
            {projects.map((p, index) =>
              <li data-id={index + 1} class="app__menu--item">
                <button data-id={index + 1} onClick={this.loadProject.bind(this)}>{p.name.toUpperCase()}</button>
              </li>
            )}
          </ul>
        </div>

        <div class={`app__about big-modal ${this.state.about ? 'open' : ''}`}>
          <button class="close app__about--close" onClick={this.toggleAbout.bind(this)}>{closeIcon()} </button>
          <div class="app__about--container big-modal__container">
            <div class="app__about--text">
              <h3>ABOUT ME</h3>
              <p>Hi, my name is Adrien Zaganelli, nice to meet you!</p>

              <p>I am currently a student at HETIC, learning how to code, design and do business on the Web. I like to try new things everyday to master new skills.</p>

              <p>I worked 3 months at <ExternalLink href="https://agence-me.com"><i>AgenceMe</i></ExternalLink> and 4 months at <ExternalLink href="https://sketchfab.com"><i>Sketchfab</i></ExternalLink>.</p>

              <p><b>In 2018 I'm looking for an internship from July to December.</b></p>

              <p>Last but not least, Iʼm available for freelance: <ExternalLink href="mailto:adrienzaganelli@gmail.com">adrienzaganelli@gmail.com</ExternalLink>
              </p>

              <div class="app__about--networks">
                {socialIcons.map(
                  icon =>
                    <ExternalLink href={icon.href} class="app__about--icon">{icon.svg}</ExternalLink>
                )}
              </div>
            </div>
          </div>
        </div>

        <CarouselInterface
          forcedFocus={this.preActivateProject()}
          projects={["me", ...projects]}
          expandViewHandler={this.enableExpandedView.bind(this)}
          interval={15000}
          toggleMenu={this.toggleMenu.bind(this)}
          onClosePost={this.props.onClosePost}
          sendMethods={this.getCarousel.bind(this)}
          disableExpandedView={this.disableExpandedView.bind(this)}
        />
        {!this.state.expandedView &&
          <button class="contact animated fadeIn" onClick={this.toggleAbout.bind(this)} >contact & about</button>
        }
        {this.state.expandedView &&
          <Post
            project={this.props.project}
            previousProject={this.props.previousProject}
            carouselMethods={this.carouselMethods}
            nextProject={this.props.nextProject}
            onClosePost={this.props.onClosePost}
            expandedView={this.state.expandedView} />
        }
        {this.state.expandedView &&
          <button class="app-to-top" onClick={this.backToTop.bind(this)}>{h(arrowSvg)}</button>
        }
      </div>
    )
  }
}
