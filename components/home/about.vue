<template>
  <section>
    <div class="app__about--text">
      <h3>About &amp; Contact</h3>
      <p>Hi, my name is Adrien Zaganelli, nice to meet you!</p>
      <p>HETIC graduate, I learned how to code, design and do business on the Web. I like to try new
        things everyday on this (very) curious world.</p>

      <p>From Paris to Montréal, I've joinder several nice places, companies and agencies as well, such as:
          <a href="https://agence-me.com"
          rel="noopener noreferrer" target="_blank"><i>AgenceMe</i></a>,
          <a href="https://sketchfab.com"
          rel="noopener noreferrer" target="_blank"><i>Sketchfab</i></a>,
          <a href="https://akufen.ca"
          rel="noopener noreferrer" target="_blank"><i>Akufen Studio</i></a>.
          <a href="https://akufen.ca"
          rel="noopener noreferrer" target="_blank"><i>HelloHikimori</i></a>.
          <a href="https://akufen.ca"
          rel="noopener noreferrer" target="_blank"><i>Colorz</i></a>.
      </p>
      <p>When I can, I write some articles for tech publishers, find them below: </p>
      <ul style="font-size: 90%;">
        <li><a
            href="https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5"
            rel="noopener noreferrer" target="_blank">Time-saving CSS techniques to create responsive images</a></li>
        <li><a
            href="https://medium.com/free-code-camp/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb"
            rel="noopener noreferrer" target="_blank">How to make your app work offline with the power of JavaScript</a>
        </li>
      </ul>
      <p>Last but not least, <b>I'm looking for a new job in Paris this fall.</b> you can contact me here: <a href="mailto:adrienzaganelli@gmail.com"
          rel="noopener noreferrer" target="_blank">adrienzaganelli@gmail.com</a></p>
    </div>
    <div>
      <h4>Get in touch</h4>
      <ul>
        <li><a @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Twitter</a></li>
        <li><a @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Linkedin</a></li>
        <li><a @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Github</a></li>
        <li><a @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Email</a></li>
      </ul>
    </div>
  </section>
</template>
