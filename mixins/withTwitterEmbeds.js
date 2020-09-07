export const writeAsyncTwitterEmbeds = str => {
  const twitterCLassNameRegExp = /class=\"twitter-tweet\"/gi
  return str.replace(twitterCLassNameRegExp, 'class="twitter-tweet" data-dnt="true" data-theme="dark"')
}

export default {
  head: {
    script: [{
      type: 'text/javascript',
      charset: 'utf-8',
      src: 'https://platform.twitter.com/widgets.js',
      async: true,
      defer: true,
    }]
  },
}
