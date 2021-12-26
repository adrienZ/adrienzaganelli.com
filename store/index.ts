const backendBase = 'https://adrienzaganelli.com/cms'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import type { WP_REST_API_Post, WP_REST_API_User } from 'wp-types';
import axios from 'axios'

interface WP_REST_API_Post_Custom extends WP_REST_API_Post {
  slug: string
}

export type RootState = ReturnType<typeof state>

export const state = () => ({
  RAF_DELTA_TIME: 15,
  NEED_JOB: false,
  backendBase,
  posts: [] as WP_REST_API_Post_Custom[],
  projects: [] as WP_REST_API_Post_Custom[],
  author: undefined as WP_REST_API_User | undefined
});

export const mutations:  MutationTree<RootState> = {
  setPosts(state, list: WP_REST_API_Post_Custom[]) {
    state.posts = list;
  },
  setProjects(state, list: WP_REST_API_Post_Custom[]) {
    state.projects = list;
  },
  setAuthor(state, user) {
    state.author = user;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const apiBase = backendBase + '/wp-json'

    // parse PROJECTS
    const projects = await axios.get(apiBase + '/wp/v2/project');
    await commit('setProjects', await projects.data);

    // parse POSTS
    const posts = await axios.get(apiBase + '/wp/v2/posts?_embed');
    await commit('setPosts', await posts.data);

    // parse author
    const author = await axios.get(apiBase + '/wp/v2/users/1');
    await commit('setAuthor', await author.data);
  },
};

export const getters : GetterTree<RootState, RootState> = {
  getPost: state => (slug: string) => {
    return state.posts.filter(post => post.slug === slug)[0]
  },
  getProject: state => (slug: string) => {
    return state.projects.filter(project => project.slug === slug)[0]
  },
  getNextProject: state => (project : WP_REST_API_Post_Custom) => {
    const { projects } = state

    const current = projects.map(p => p.slug).indexOf(project.slug)
    let nextIndex = current + 1

    if (current === projects.length - 1) {
      nextIndex = 0
    }

    return projects[nextIndex]
  }
}

