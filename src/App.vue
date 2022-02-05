<template>
  <UserList />
</template>

<script>
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components:{
    UserList
  }
  
}
</script>

<style>
  *{
    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
