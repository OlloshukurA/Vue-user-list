<template>
  <div id="container">
    <h1 id="element">{{ message }}</h1>

    <div id="list--container">
      <div id="list">
        <span class="bold">Name</span>
        <span v-for="user in users" :key="user.id">{{ user.name }}</span>
      </div>

      <div id="list">
        <span class="bold">Email</span>
        <span v-for="user in users" :key="user.id">{{ user.email }}</span>
      </div>

      <div id="list">
        <span class="bold">Phone</span>
        <span v-for="user in users" :key="user.id">{{ user.phone }}</span>
      </div>

      <div id="list">
        <span class="bold">City</span>
        <span v-for="user in users" :key="user.id">{{
          user.address.city
        }}</span>
      </div>

      <div id="list">
        <span class="bold">Street</span>
        <span v-for="user in users" :key="user.id">{{
          user.address.street
        }}</span>
      </div>

      <div id="list">
        <span class="bold">Zipcode</span>
        <span v-for="user in users" :key="user.id">{{
          user.address.zipcode
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  name: "UserList",
  data() {
    return {
      message: "Users List",
      users: [],
    };
  },

  methods: {
    getElemet(users) {
      console.log(users.children);
    },
  },

  beforeCreate() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
      this.users.length = 5;
    });
  },
};
</script>

<style scoped>

#container{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#480ca8, #b5179e);

}

h1{
    padding: 50px;
    font-size: 100px;
color: transparent;
/* background: #FFFFFF; */
text-shadow: 0 1px #cac0c0, -1px 0 #ffffff, -1px 2px #000000, -2px 1px #000000, -2px 3px #000000, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #000000, -6px 7px #000000, -7px 6px #000000, -7px 8px #000000, -8px 7px #000000;
}
#list--container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 15%;
  width: 68%;
  height: 30vh;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.8);
  box-shadow: 4px 4px 8px 0px rgba(207, 197, 197, 0.2);
}

span {
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  font-size: 1rem;
  font-weight: 500;
  /* border: 1px solid #480ca8; */
  padding: 3px 5px;
  color: #fff;
  text-shadow: 5px 5px 15px linear-gradient(#480ca8, #b5179e);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
}

.bold{
    color: #696b6e;
    font-weight: 900;
}
</style>