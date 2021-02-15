<template>
  <div  class="bookmark__item">
    <img class="bookmark__item-icon"  :src="bookmark.icon" alt="icon">
    <p class="bookmark__item-title">{{ bookmark.title }}</p>
    <a target="_blank" :href="bookmark.link" class="bookmark__item-link">{{bookmark.link}}</a>
    <div  class="bookmark__item-edit" @click.self="dropdown">
      <edit-bookmark @copy-url-bookmark="copyUrl" @remove-bookmark="bookmarkEditRemove(bookmark)"
                     @show-add-modal="showModal"
                      @close-dropdown="edit=false" v-if="edit"></edit-bookmark>
    </div>
      <add-bookmark @close-add-modal="closeModal"
                    v-if="addModal" :title="bookmark.title"
                    :link="bookmark.link" :id="bookmark.id"></add-bookmark>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AddBookmark from '../views/AddBookmark';
import EditBookmark from './EditBookmark';
import writeToClipboard from '../common/writeToClipboard';


export default {
  name: 'Bookmark',
  components: { EditBookmark, AddBookmark },
  props: {
    bookmark: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
      addModal: false,
    };
  },
  methods: {
    ...mapActions(['bookmarkEditRemove']),
    dropdown() {
      this.edit = true;
    },
    showModal() {
      this.addModal = true;
      this.edit = false;
    },
    closeModal() {
      this.addModal = false;
    },
    copyUrl() {
      writeToClipboard.write(this.bookmark.link);
      this.edit = false;
    },
  },
};
</script>

<style scoped>
.bookmark__item{
  display: flex;
  align-items: center;
}
.bookmark__item-title{
  font-size: 20px;
  font-family: "SFP Regular",serif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 15%;
  min-width: 80px;
}
.bookmark__item p:not(:first-child){
  padding-left: 15px;
}
.bookmark__item-link{
  font-family: "SFP Regular",serif;
  color: black;
  padding-left: 20px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 30%;
  text-decoration: none;
  min-width: 100px;
}
.bookmark__item-edit{
  cursor: pointer;
  background-image:  url("https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/dots-dotted-option-menu-bullet-256.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  background-position: bottom;
  background-repeat: no-repeat;
  margin: 0 0 0 auto;
}
.bookmark__item-icon{
  width: 30px;
  height: 30px;
}

</style>
