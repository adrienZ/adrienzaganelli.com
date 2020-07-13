import path from 'path'

export const state = () => ({
  posts: [],
  projects: [],
});

export const mutations = {
  setPosts(state, list) {
    state.posts = list;
  },
  setProjects(state, list) {
    state.projects = list;
  },
  setAuthor(state, user) {
    state.author = user;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {

    // parse PROJECTS
    const projects = await fetch('http://localhost:8888/zogzog/wp-json/wp/v2/project');
    await commit('setProjects', await projects.json());

    // parse POSTS
    const posts = await fetch('http://localhost:8888/zogzog/wp-json/wp/v2/posts');
    await commit('setPosts', await posts.json());

    // parse author
    const author = await fetch('http://localhost:8888/zogzog/wp-json/wp/v2/users/1');
    await commit('setAuthor', await author.json());
  },
};

export const getters = {
  getPost: state => slug => {
    return state.posts.filter(post => post.slug === slug)[0]
  },
  getProject: state => slug => {
    return state.projects.filter(project => project.slug === slug)[0]
  }
}