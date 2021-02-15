export default {
  state() {
    return {
      bookmarks: [
        {
          id: Math.random().toString(36).substring(10),
          title: 'Twitter',
          link: 'https://twitter.com',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Pinterest',
          link: 'https://www.pinterest.com/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Google',
          link: 'https://google.ru/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'YouTube',
          link: 'https://www.youtube.com/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Вконтакте',
          link: 'https://vk.com/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Facebook',
          link: 'https://ru-ru.facebook.com/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'MDN Web Docs',
          link: 'https://developer.mozilla.org/',
        },
        {
          id: Math.random().toString(36).substring(10),
          title: 'Habr',
          link: 'habr.com',
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
          // eslint-disable-next-line no-param-reassign
          bookmarkIter.title = bookmark.title;
        }
      });
    },
    changeLink(state, bookmark) {
      state.bookmarks.forEach((bookmarkIter) => {
        if (bookmarkIter.id === bookmark.id) {
          // eslint-disable-next-line no-param-reassign
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
