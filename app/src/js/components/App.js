import { Component, h } from 'preact' // eslint-disable-line
import CarouselInterface from "@js/components/CarouselInterface" // eslint-disable-line
import projects from "@js/models/data"
import Markup from 'preact-markup' // eslint-disable-line

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
          projects={projects}
          expandViewHandler={this.enableExpandedView.bind(this)}
          interval={2000}
        />
        {this.state.expandedView && <Markup markup={this.state.expandedView}/>}
      </div>
    )
  }

  enableExpandedView(postText) {
    this.setState({
      expandedView: postText,
    })
  }
}
