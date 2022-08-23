<template>
  <div>
    <section class="container">
      <span class="error" v-if="error">{{error}}</span> 
      <div class="box">  
            
        <p>Register</p>
        <input type="text" id="username" name="username" class="btn" 
        placeholder="Username" v-model="username" required>

        <input type="text" id="email" name="email" class="btn" 
        placeholder="email" v-model="email" required>

        <input type="password" id="password" name="password" class="btn" 
        placeholder="Password" v-model="password" required>

        <input type="submit" class="send" name="Send" value="Sign up" 
        @click="register">
              
        <router-link to="login">Login here </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Auth from '@/services/Auth.js'

export default {
  name: 'RegisterUser',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },

  components: {
  },

  methods: {
    async register () {
      try {
        const response = await Auth.register({
          username: this.username,
          email: this.email,
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
