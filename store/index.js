import path from 'path'

export const state = () => ({
  blogPosts: [],
  caseStudies: [],
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setCaseStudies(state, list) {
    state.caseStudies = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {

    // parse BLOG
    let posts = await require.context('@api/articles/', false, /\.json$/)
    posts = posts.keys().map(filename => {
      const post = posts(filename)
      post.slug = path.parse(filename).name
      return post
    }).filter(post => post.published)
    await commit('setBlogPosts', posts);

    // parse PROJECTS
    let projects = await require.context('@api/projects/', false, /\.json$/)
    projects = projects.keys().map(filename => {
      const project = projects(filename)
      project.slug = path.parse(filename).name
      return project
    }).filter(project => project.published)
    await commit('setCaseStudies', projects);
  },
};

export const getters = {
  getPost: state => slug => {
    return state.blogPosts.filter(post => post.slug === slug)[0]
  },
  getProject: state => slug => {
    return state.caseStudies.filter(project => project.slug === slug)[0]
  }
}