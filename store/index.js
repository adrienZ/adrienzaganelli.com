export const state = () => ({
  blogPosts: [],
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const posts = await fetch('http://localhost:8080/api/articles/list').then(res => res.json())
    await commit('setBlogPosts', posts.items);
  },
};

export const getters = {
  getPost: state => slug => {
    return state.blogPosts.filter(post => post.slug === slug)[0]
  }
}