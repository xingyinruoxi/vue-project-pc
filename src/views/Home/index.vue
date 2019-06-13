<template>
  <div class="home">
    <HelloWorld msg="欢迎光临，我们的网站！"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
