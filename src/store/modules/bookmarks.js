export default {
  state() {
    return {
      bookmarks: [
        {
          id: Math.random().toString(36).substring(10),
          title: 'Twitter',
          link: 'https://twitter.com',
          icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-256.png',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Pinterest',
          link: 'https://www.pinterest.com/',
          icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-256.png',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Google',
          link: 'https://google.ru/',
          icon: 'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'YouTube',
          link: 'https://www.youtube.com/',
          icon: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-256.png',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Вконтакте',
          link: 'https://vk.com/',
          icon: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/vk-256.png',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Facebook',
          link: 'https://ru-ru.facebook.com/',
          icon: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png',
        },
      ],
    };
  },
  actions: {
    bookmarkEditRemove(context, bookmark) {
      context.commit('removeBookmark', bookmark.id);
    },
    bookmarkEdit(context, bookmark) {
      context.commit('changeTitle', bookmark);
      context.commit('changeLink', bookmark);
    },
    bookmarkEditAdd(context, bookmark) {
      context.commit('addBookmark', bookmark);
    },
  },
  mutations: {
    changeTitle(state, bookmark) {
      state.bookmarks.forEach((bookmarkIter) => {
        if (bookmarkIter.id === bookmark.id) {
          bookmarkIter.title = bookmark.title;
        }
      });
    },
    changeLink(state, bookmark) {
      state.bookmarks.forEach((bookmarkIter) => {
        if (bookmarkIter.id === bookmark.id) {
          bookmarkIter.link = bookmark.link;
        }
      });
    },
    addBookmark(state, bookmark) {
      state.bookmarks.unshift(bookmark);
    },
    removeBookmark(state, id) {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== id);
    },
  },
  getters: {
    bookmarks: state => state.bookmarks,
  },
};
