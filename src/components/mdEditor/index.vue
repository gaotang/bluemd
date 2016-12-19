<template>
    <main>
      <navBar />
      <section>
        <inputer />
        <outputer />
      </section>
    </main>
</template>
<script>
  import navBar from './navBar.vue'
  import inputer from './inputer.vue'
  import outputer from './outputer.vue'

  export default {
    components: {
      navBar,
      inputer,
      outputer
    }
  }

</script>

