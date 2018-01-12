import { Component, h } from 'preact' // eslint-disable-line
import CarouselInterface from "@js/components/CarouselInterface" // eslint-disable-line
import projects from "@js/models/data"
import Post from '@js/components/Post' // eslint-disable-line
import SmoothScroll from 'smooth-scroll'
import { arrowSvg } from '@js/models/utils'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      expandedView: null
    }
  }

  render() {
    return (
      <div>
        <CarouselInterface
          projects={[ "me", ...projects]}
          expandViewHandler={this.enableExpandedView.bind(this)}
          interval={20000}
          disableExpandedView={this.disableExpandedView.bind(this)}
        />
        { this.state.expandedView &&
          <Post
            project={this.props.project}
            previousProject={this.props.previousProject}
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

  enableExpandedView(postText, pIndex, onClosePost) {
    this.setState({
      expandedView: postText,
    })

    this.props = Object.assign(this.props, {
      project: projects[pIndex - 1],
      previousProject: projects[pIndex - 1] || projects[projects.length - 1],
      nextProject: projects[pIndex + 1] || projects[0],
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
}
