
const collaborators = [
  {
    fullname: 'Suong Kévin Tan',
    link: 'http://suongkevintan.com/'
  },
  {
    fullname: 'Jennyfer Millet',
    link: 'http://jennyfermillet.com/'
  },
  {
    fullname: 'Aymeric Chappuy',
    link: 'https://www.behance.net/achappuy'
  },
  {
    fullname: 'Aude Ficheux',
    link: 'http://www.audeficheux.com/'
  },
  {
    fullname: 'Corentin Marzin',
    link: 'http://corentinmarzin.fr/'
  },
  {
    fullname: 'Michael Zaccardi',
    link: 'https://www.michaelzaccardi.com/'
  },
  {
    fullname: 'Emmanuel Naim',
    link: 'https://www.behance.net/emmanuelna31d3'
  },
  {
    fullname: 'Alexandre Autret',
    link: 'http://www.hackhours.co/'
  },
  {
    fullname: 'Barthelemy Chalvet',
    link: 'https://dribbble.com/barthelemychalvet'
  },
  {
    fullname: 'Marine Legrand',
    link: 'https://dribbble.com/marine_legrand'
  },
  {
    fullname: 'Léonard Chalvet',
    link: 'https://www.malt.fr/profile/leonardchalvet1'
  },
  {
    fullname: 'Atika Koffy',
    link: 'https://www.linkedin.com/in/atika-koffy-9a7659b7/'
  },
  {
    fullname: 'Félix LaFeuille',
    link: 'https://twitter.com/FLaFeuille'
  },
  {
    fullname: 'Pierre Trotsky',
    link: 'https://www.linkedin.com/in/pierre-trotsky-9969a2123/'
  },
  {
    fullname: 'Margaux Tellier',
    link: 'https://dribbble.com/margauxtell'
  },
  {
    fullname: 'Claire Zunda',
    link: 'https://www.linkedin.com/in/claire-zunda-6b6a54a6/'
  },
  {
    fullname: 'Yohan Atlan',
    link: 'https://www.malt.fr/profile/yohanatlan'
  },
  {
    fullname: 'Raphael Piacitelli',
    link: 'https://www.linkedin.com/in/raphael-piacitelli-4649a7106/'
  },
]

const buildCollaborator = (id, role) => Object.assign(collaborators[id], { role })

export default [
  {
    slug: 'pulsar',
    name: 'Pulsar One [Ø]',
    file: 'pulsar.md',
    description: "Pulsar one is a game where the story evolves depending on your choices, you are the chosen one who have to save the world, The game is in French.",
    cover: 'src/media/img/carousel-img/pulsar.png',
    date: 'May 2016',
    myRole: 'Lead developer',
    link: 'https://adrienzaganelli.com/projects/pulsar_one/',
    collaborators: [
      buildCollaborator(0, 'Leader/UI designer'),
      buildCollaborator(1, 'Data manager'),
      buildCollaborator(2, 'Sound & Game designer'),
      buildCollaborator(3, 'Javascript developer'),
    ]
  },
  {
    slug: 'Fidget',
    name: 'Fidget Cube',
    file: 'fidget.md',
    description: 'The Fidget cube is an unusually addicting, high-quality desk toy designed to help you focus. Fidget at work, in class, and at home in style.',
    cover: 'src/media/img/carousel-img/fidget.png',
    date: 'November 2016',
    myRole: 'Webgl developer',
    link: 'https://suongkevintan.github.io/hetic-p2019-11/',
    collaborators: [
      buildCollaborator(4, 'Javascript developer'),
      buildCollaborator(0, 'Leader & UX designer'),
      buildCollaborator(5, 'UI designer'),
      buildCollaborator(6, 'Writter'),
    ],
  },
  {
    slug: 'marketme',
    name: 'MARKET-ME.FR',
    file: 'marketme.md',
    description: 'The MarketMe team (2 developers, 2 designers, 1 marketing assistant) and I build a creative marketplace in 2 months.',
    cover: 'src/media/img/carousel-img/marketme.png',
    date: 'July-September 2016',
    myRole: 'Intern full stack developer',
    link: 'https://www.market-me.fr/',
    collaborators: [
      buildCollaborator(7, 'Back-end developper'),
      buildCollaborator(8, 'UI Designer'),
      buildCollaborator(9, 'UX Designer'),
      buildCollaborator(10, 'Front-end Developper'),
      buildCollaborator(11, 'Marketing'),
    ]
  },
  {
    slug: 'cnje',
    name: 'CNJE',
    file: 'cnje.md',
    cover: 'src/media/img/carousel-img/cnje.png',
    date: 'July-August 2017',
    myRole: 'Front end Developer',
    link: 'https://junior-entreprises.com/',
    collaborators: [
      buildCollaborator(12, 'Back-end developer'),
    ]
  },
  {
    slug: 'alium',
    file: 'alium.md',
    cover: 'src/media/img/carousel-img/alium.jpg',
    date: 'April-May 2017',
    myRole: 'Front-end developer',
    link: 'https://www.aliumbikes.fr/fr/',
    collaborators: [
      buildCollaborator(13, 'Leader'),
      buildCollaborator(14, 'UI & UX Designer'),
      buildCollaborator(15, 'Back-end developer'),
      buildCollaborator(16, 'Front-end Developper'),
      buildCollaborator(17, 'Marketing & SEO'),
    ]  },
  {
    slug: 'skfb',
    name: 'Sketchfab',
    file: 'skfb.md',
    cover: 'src/media/img/carousel-img/skfb.png',
    date: 'July-October 2017',
    myRole: 'Intern front-end developer',
    link: 'https://sketchfab.com',
    collaborators: []
  }
]