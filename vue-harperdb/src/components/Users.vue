<template>
  <div>
    <h3>Users:</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: null,
    };
  },
  // replace this with HarperDB
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
    });
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>
