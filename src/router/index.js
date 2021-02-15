import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: () => import('../views/Bookmarks'),
      alias: '/',
    },
    {
      path: '/add-bookmark',
      name: 'add-book-mark',
      component: () => import('../views/AddBookmark'),
    },
  ],
});
