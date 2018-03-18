<template>
  <section class="main">
    {{ topicId }}
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`/api/topic/${params.id}`)
    return { topic: data }
  },

  head () {
    return {
      title: 'CNode: Node.js专业中文社区'
    }
  },

  data() {
    return {
      topicId: ''
    }
  },

  methods: {

  },

  mounted () {
    const self = this;

    console.log(this.topic)
  },

  components: {
  }
}
</script>

<style lang="scss" scoped>
  .main {

  }
</style>
