<template>
  <div>
    <div class="dropdown-backdrop" @click="$emit('close-dropdown')"></div>
    <div class="dropdown">
      <button @click="$emit('show-add-modal')" class="dropdown__item">Edit</button>
      <button @click="$emit('copy-url-bookmark')" class="dropdown__item">Copy URL</button>
      <button @click="$emit('remove-bookmark')" class="dropdown__item">Delete</button>
  </div>

</div>
</template>

<script>
export default {
  name: 'DropdownBookmark',
};
</script>

<style scoped>
.dropdown{
 position: fixed;
  width: 100%;
  max-width: 130px;
  height: 100px;
  background-color: white;
  outline: none;
  padding: 8px 0;
  transform: translate(-64%,25%);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 2000;
}
.dropdown__item {
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  font-family: "SFP Regular",serif;
  font-size: 15px;
  color: black;
  min-height: 32px;
  padding: 0 24px;
  text-align: start;
  user-select: none;
  width: 100%;
}
.dropdown__item {
  outline: none;
}
.dropdown-backdrop{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

</style>
