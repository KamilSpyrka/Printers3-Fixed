<template>
  <div>
    <section class="container">
      <span class="error" v-if="error">{{error}}</span> 
      <div class="box">  
          <p>Sign in</p>

          <input type="text" id="username" name ="username" class="btn" 
          placeholder="Username" v-model="username" required>

          <input type="password" id="password" name="password" class="btn" 
          placeholder="Password" v-model="password" required>

          <input type="submit" class="send" name="Send" value="Sign in" 
          @click="login">

        <router-link to="register">Register here </router-link>
      </div> 
    </section>
  </div>
</template>

<script>
import Auth from '@/services/Auth.js'

export default {
  name: 'LoginUser',
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
        const response = await Auth.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken',response.data.token)
        this.$store.dispatch('setUser',response.data.user)
        this.$router.push({name: 'products'})
      } 
      catch (error) {
        this.error = error.response.data.error 
      }
    }
  }
}
</script>

<style scoped>
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    border-bottom:#000 1px solid;
  }
  a:visited {
    color: #000;
    
  }
  p {
    font-size:50px;
  }
  .logo {
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .box {
      height: 200px;
      width: 80%;
      margin-top: 80px;
    }
    textarea {
      min-height: 250px;
    }
}
</style>
