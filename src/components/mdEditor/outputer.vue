<template>
	<div v-html='ripeTxt' :class="[showPreview ? 'outputer' : 'hideoutputer']"></div>
</template>

<script>
  export default {
    data () {
      return {
        scrollTrigger: false
      }
    },
    computed: {
      showPreview () {
        return this.$store.state.showPreview
      },
      ripeTxt () {
        return this.$store.getters.articleMd
      }
    }
  }
</script>

<style scoped lang="less">
	.outputer {
  	box-sizing: border-box;
  	height: 100%;
  	width: 50%;
    padding: 15px;
    resize: none;
    border: none;
    background-color: #f5f5f5;
    outline: none;
    font-family: inherit;
    font-size: 18px;
    color: #616161;
    box-shadow: 4px 5px 3px #aaa;
    white-space: normal;
    overflow-y: scroll;
    word-wrap: break-word;
	}
  .hideoutputer {
    display:none;
  }
</style>
