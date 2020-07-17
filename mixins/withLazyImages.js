import lazysizes from 'lazysizes';

export const writeLazyWpImages = str => {
  const imageRegExp = /(<figure class=\"wp-block-image\")(.*)(figure>)/gi
  return str.replace(imageRegExp, str => {
    let res = str
    res = res.replace('src="', 'data-src="')
    res = res.replace('srcset="', 'data-srcset="')
    res = res.replace('class="wp-image-', 'class="lazyload wp-image-')
    return res
  })
}
export const writeLazyWpVideos = str => {
  const videoRegExp = /(<figure class=\"wp-block-video\")(.*)(figure>)/gi
  return str.replace(videoRegExp, str => {
    let res = str
    res = res.replace('<video', '<video class="lazyload"' )
    return res
  })
}


export const writeLaztyIframes = str => {
  const iframeRegExp = /(<iframe)(.*)(iframe>)/gi
  return str.replace(iframeRegExp, str => {
    let res = str
    res = res.replace('src="', 'data-src="')
    res = res.replace('class="', 'class="lazyload ')
    return res
  })
}

export default {
  mounted() {
    lazysizes.init()
  }
}