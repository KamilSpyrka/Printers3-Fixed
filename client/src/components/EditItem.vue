<template>
  <div>
    <section class="container">
      <span class="error" v-if="error">{{error}}</span>
      <div class="box">  
        <p>
            Add Printer
            <router-link to="/products">
                <span class="material-icons">
                arrow_back
                </span>
            </router-link>
        </p>
        
        <input type="text" id="title" name ="title" class="btn"
        placeholder="Title" v-model="item.title" maxlength="50"
        required :rules="required">
        
        <textarea id="description" name ="description" class="btn"
        placeholder="Description" v-model="item.description"
        required :rules="required"> </textarea>             

        <input type="submit" class="send" name="create"
        value="Edit" @click="edit">
      </div> 
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ProductsService from '@/services/ProductsService'

export default {
  name: 'NewItem',
    data () {
      return {
        item: {
          title: null,
          description: null,
          username: null
        },

        error: null,
        required: (value) => !!value || 'Required.'
      }
    },

  computed: {
    ...mapState([
    'isUserLoggedIn',
    'user'
    ])
  },

  async mounted () {
    if (!this.isUserLoggedIn) {
      this.$router.push({name: 'Login'})
      return
    }
    try {
      const itemId = this.$route.params.itemId
      this.item = (await ProductsService.show(itemId)).data
    }
    catch (err) {
      console.log(err)
    }
    
    if (this.item.username != this.$store.state.user.username) {
    this.$router.push({name: 'Login'})
    return
    }  
  },

  methods: {
    async edit () {
        const areAllFilled = Object.keys(this.item).every(key => !!this.item[key])
        if (!areAllFilled) {
          this.error = 'You need to fill in all required fields'
          return
        }

        try{
          await ProductsService.put(this.item)
          this.$router.push({name: 'products'})
        }
        catch(err) {
          console.log(err)
        }
    }
  },  
}
</script>

<style scoped>
  .box {
    min-width: 800px;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    .box {
      min-height: 550px;
      min-width: 300px;
      margin-top: 80px;
    }
    textarea {
      min-height: 250px;
    }
}
</style>