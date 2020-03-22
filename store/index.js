export const state = () => ({
  checked: true,
  popupOpened: false,
  popupData: '',
  menuOpened: true,
  blogPosts: [],
  works: [],

})

export const mutations = {
  isExpanded (state) {
      state.expanded = !state.expanded;
  },
  isOpened (state) {
    state.popupOpened = !state.popupOpened;
  },
  isMenuOpened (state) {
    state.menuOpened = !state.menuOpened;
  },
  CheckHamburger(state) {
    state.checked = !state.checked;
  },
  setPopupData(state, payload) {
    state.popupData = payload;
  },
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setWorks(state, list) {
    state.works = list;
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    /* Get Posts */
    try {

      // let postFiles = await require.context('~/assets/content/blog/', false, /\.json$/);
      
      // let blogPosts = postFiles.keys().map(key => {
      // let resPost = postFiles(key);
      // resPost.slug = key.slice(2, -5);
      //   return resPost;
      // });
      // await commit('setBlogPosts', blogPosts);
      
      /* Get works */
      let workFiles = await require.context('~/assets/content/portfolio/', false, /\.json$/);

      let works = workFiles.keys().map(key => {
      let resWorks = workFiles(key);
      resWorks.slug = key.slice(2, -5);
        return resWorks;
      });
      await commit('setWorks', works);
    } catch (e) {
      console.log(e);
    }
    
  },
}

export const getters = {
  Expanded: state => {
      return state.expanded;
    },
    PopupOpened: state => {
      return state.popupOpened;
    },
    PopupData: state => {
      return state.popupData;
    },
    InfoData: state => {
      return state.infos;
    },
    User: state => {
      return state.isUser;
    },
    MenuOpened: state => {
      return state.menuOpened;
    },
    BurgerChecked: state => {
      return state.checked;
    }
}