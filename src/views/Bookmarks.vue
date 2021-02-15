<template>
  <div class="bookmarks-container">
   <div class="bookmarks-container__top">
     <h2 class="title">Bookmarks</h2>
     <router-link to="/add-bookmark">
       <img class="add-bookmarks-img"
            src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Plus_green-256.png"
            alt="add bookmarks img">
     </router-link>
   </div>
    <div class="bookmark">
      <div class="bookmark__list"
           v-for="bookmark in bookmarks" :key="bookmark.id">
        <bookmark  :bookmark="bookmark"></bookmark>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Bookmark from '../components/Bookmark';


export default {
  name: 'Bookmarks',
  components: { Bookmark },
  computed: {
    ...mapGetters(['bookmarks']),
  },
};
</script>

<style scoped>
.bookmarks-container__top{
  display: flex;
  align-items: center;
}
.add-bookmarks-img{
  width:30px ;
  height:30px;
  margin-left: 20px;
  cursor: pointer;
}
.bookmark{
  color: black;
}
.title{
  font-family: "SFP Bold",serif;
  font-size: 30px;

}
.bookmarks-container{
  box-shadow: 0 1px 2px rgb(0 0 0 / 70%);
  margin: 0 auto;
  width: 94%;
  max-width: 1000px;
  padding: 5px 20px;
  margin-top: 30px;
}

</style>
