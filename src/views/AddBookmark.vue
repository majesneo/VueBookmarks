<template>
<div>
  <div class="modal-backdrop" @click="$emit('close-add-modal')"></div>
  <div class="modal add-bookmark">
    <h3>{{addBookmarkTitle}}</h3>


      <label class="add-bookmark__title" for="bookmark-title">
        Name
        <input @blur="blurLocalTitle" v-focus type="text"
               v-model.trim="$v.localBookmark.localTitle.$model"
               id="bookmark-title"/>
        <p class="error" v-if="$v.localBookmark.localTitle.$dirty &&
         !$v.localBookmark.localTitle.required">this field is required</p>
      </label>


    <label class="add-bookmark__link" for="bookmark-link">
      URL
      <input @blur="blurLocalLink"  type="text"
             v-model.trim="$v.localBookmark.localLink.$model"
             id="bookmark-link">
      <p class="error" v-if="$v.localBookmark.localLink.$dirty &&
       !$v.localBookmark.localLink.required">this field is required</p>
    </label>


    <div class="add-bookmark__btn">
      <button @click="checkUrl" class="btn">Cancel</button>
      <button :disabled="$v.$anyError" @click="checkUrl(localBookmark)"
              class="btn">Save</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import focusDirective from '../directives/focusDirective';


export default {
  name: 'AddBookmark',
  props: {
    title: String,
    id: String,
    link: String,
    required: true,
  },
  data() {
    return {
      localBookmark: {
        localTitle: this.title,
        localLink: this.link,
        localId: this.id,
      },
    };
  },
  validations: {
    localBookmark: {
      localTitle: {
        required,
      },
      localLink: {
        required,
      },
    },
  },
  directives: {
    focus: focusDirective,
  },
  methods: {
    ...mapActions(['bookmarkEdit', 'bookmarkEditAdd']),
    checkUrl(localBookmark) {
      if (this.$route.path === '/add-bookmark') {
        if (localBookmark.localTitle) {
          this.addBookmark(localBookmark.localTitle, localBookmark.localLink);
        }
        this.$router.push('/bookmarks');
      }
      this.changeBookmark(localBookmark);
      this.$emit('close-add-modal');
    },
    changeBookmark(localBookmark) {
      const bookmark = {
        id: localBookmark.localId,
        title: localBookmark.localTitle,
        link: localBookmark.localLink,
      };
      this.bookmarkEdit(bookmark);
      this.$emit('close-add-modal');
    },
    addBookmark(title, link) {
      const bookmark = {
        id: Math.random().toString(36).substring(10),
        title,
        link,
      };
      this.bookmarkEditAdd(bookmark);
    },
    blurLocalTitle() {
      this.$v.localBookmark.localTitle.$touch();
    },
    blurLocalLink() {
      this.$v.localBookmark.localLink.$touch();
    },
  },
  computed: {
    addBookmarkTitle() {
      if (this.$route.path === '/add-bookmark') {
        return 'Add bookmark';
      }
      return 'Change bookmark';
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 60px;
  width: 633px;
  height: 285px;
  padding: 1rem;
  background: #fff;
  z-index: 1000;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
.btn{
  font-family: "SFP Regular",serif;
  font-size: 15px;
  min-width: 28px;
  padding: 8px 16px;
  border-radius: 18px;
  background: #0071e3;
  color: #fff;
  border: none;
  cursor: pointer;
}
.btn:focus{
  outline: none;
}
h3 {
margin: 0;
}
.add-bookmark__btn{
  margin-top: 20px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
}
.add-bookmark{
  font-family: "SFP Bold", serif;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.add-bookmark__title{
  margin-top: 40px;
  font-family: "SFP Regular", serif;
  font-size: 20px;
}
.add-bookmark__link{
  margin-top: 30px;
  font-family: "SFP Regular", serif;
  font-size: 20px;
  margin-left: 14px;
}
input{
  border:  1px solid #e2e2e2;
  font-family: "SFP Regular",serif;
  font-size: 16px;
}
input:focus{
outline: none;
}
.error {
  color: red;
  font-size: 12px;
  text-transform: uppercase;
  transform: translate(30%,30%);
  font-family: "SFP Bold",serif;
}
button:disabled{
  background-color: #e2e2e2;
  cursor:default;
}
p{
  margin: 0;
}
</style>
