
import style from "@sass/style.scss" // eslint-disable-line
import Carousel from "@js/modules/Carousel"

import axios from "axios"
import showdown from "showdown"

axios.get('src/media/markdown/test.md', {
  onDownloadProgress: function (progressEvent) {
    if (progressEvent.lengthComputable) {
      console.log(`loading: ${(progressEvent.loaded / progressEvent.total) * 100 } %`)
    } else {
      console.log('loading');
    }
  },
}).then(response => {
  const app = document.getElementById('app')
  const converter = new showdown.Converter()
  app.innerHTML = converter.makeHtml(response.data)
})


const carousel = new Carousel(document.body, ["a","b","c","d"])
carousel.start()
