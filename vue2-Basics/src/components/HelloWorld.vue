<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '生命周期演示',
      counter: 0
    }
  },
  created() {
    console.log('组件被创建')
  },
  mounted() {
    console.log('组件被挂载')
    this.startCounter()
  },
  methods: {
    startCounter() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
