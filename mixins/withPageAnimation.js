export default {
  head: {
    script: [
      {
        innerHTML: `
          document.body.style.opacity = 0
          var readyStateCheckInterval = setInterval(function() {
              if (document.readyState === "complete") {
                  clearInterval(readyStateCheckInterval);
                  console.log("SHOW")
                  document.body.style.opacity = 1
              }
          }, 10);
        `,
        body: true,
        type: 'text/javascript',
        charset: 'utf-8'
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
}