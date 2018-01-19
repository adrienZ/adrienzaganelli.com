import { Component, h } from 'preact' // eslint-disable-line
import CarouselInterface from "@js/components/CarouselInterface" // eslint-disable-line
import projects from "@js/models/data"
import Post from '@js/components/Post' // eslint-disable-line
import SmoothScroll from 'smooth-scroll'
import { arrowSvg, closeIcon } from '@js/models/utils'
import Router from '@js/models/router'


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
  }

  getCarousel(obj) {
    this.carouselMethods = obj
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    })
  }

  toggleAbout() {
    this.setState({
      about: !this.state.about
    })
  }

  loadProject(e) {
    const id = parseInt(e.target.dataset.id)
    if (this.state.expandedView) {
      this.carouselMethods.onClosePost()
    }
    this.carouselMethods.setPosition(id)
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div class="app__container">
        <p onClick={this.easterEgg.bind(this)} class={`brandname animated ${this.state.easterEgg ? 'hinge' : ''}`}>ADRIEN ZAGANELLI</p>

        <div class={`app__menu big-modal ${this.state.menu ? 'open' : ''}`}>
          <div class="app__menu--bg">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul class="app__menu--list">
            <li class="app__menu--item">
              <button onClick={this.toggleMenu.bind(this)}>
                {closeIcon()}
              </button>
            </li>
            <li data-id="0" onClick={this.loadProject.bind(this)} class="app__menu--item">
              Me
            </li>
            <li class="app__menu--item" onClick={this.toggleAbout.bind(this)}>About</li>
            {projects.map((p, index) =>
              <li class="app__menu--item">
                <button data-id={index + 1} onClick={this.loadProject.bind(this)}>{p.name}</button>
              </li>)
            }
          </ul>
        </div>

        <div class={`app__about big-modal ${this.state.about ? 'open' : ''}`}>
          ABOUT ME
          Hi, my name is Adrien Zaganelli, nice to meet you !

          I am a student at HETIC, a french school teaching us how to code, design and do business on the Web. This winter 2017 i'm looking for a internship, if you are interested, please send me an e-mail at adrienzaganelli@gmail.com or contact me through my social networks.

          You will find on this website some of my projects, most are school projects made by small teams (4-6) such as Puslar One [ø] others are real world project for instance Market-ME.

          Last but not least, i am freelancing : I'll be pleased to collaborate with you in various projects or missions. If you have any further questions do not hesitate to contact me, I will answer you as soon as possible.
          <button class="btn" onClick={this.toggleAbout.bind(this)}>Close about</button>
        </div>

        <CarouselInterface
          forcedFocus={this.preActivateProject()}
          projects={["me", ...projects]}
          expandViewHandler={this.enableExpandedView.bind(this)}
          interval={6000000}
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
