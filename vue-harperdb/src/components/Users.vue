<template>
  <div>
    <div class="flex">
      <h3>Users:</h3>
      <button v-on:click="showForm = true">Add new user</button>
    </div>
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
          <td>{{ user.city }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="showForm">
      <form>
        <div>
          <label>Name</label>
          <input type="text" v-model="formData.name" />
        </div>
        <div>
          <label>City</label>
          <input type="text" v-model="formData.city" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" v-model="formData.email" />
        </div>
        <button type="submit" v-on:click="addUser(formData)">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: null,
      errored: null,
      loading: null,
      showForm: false,
      formData: {
        name: "",
        email: "",
        city: "",
      },
    };
  },
  mounted() {
    axios
      .post(
        "https://cloud-0-milecia.harperdbcloud.com",
        JSON.stringify({
          operation: "sql",
          sql: "select * from staging.users",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.VUE_APP_HARPERDB_TOKEN,
          },
        }
      )
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    addUser: function(data) {
      console.log(data)
      axios
        .post(
          "https://cloud-0-milecia.harperdbcloud.com",
          JSON.stringify({
            operation: "insert",
            schema: "staging",
            table: "users",
            records: [
              {
                name: data.name,
                city: data.city,
                email: data.email,
              },
            ],
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.VUE_APP_HARPERDB_TOKEN,
            },
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}

.flex {
  display: flex;
}
</style>
