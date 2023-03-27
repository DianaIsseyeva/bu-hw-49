<template>
  <button @click="$router.push('/')">Main</button>
  <input v-model="blockNumberOrHash" placeholder="enter block's number or hash"/>
  <button @click="$router.push(`/block/${this.blockNumberOrHash}`)">Open</button>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return{
      blockNumberOrHash: ''
    }
  }
}
</script>

<style></style>