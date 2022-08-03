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
        placeholder="Title" v-model="product.title" maxlength="50"
        required :rules="required">

        <select id="printerType" name="printerType" class="btn"
        placeholder="Printer type" v-model="product.printerType"
        required :rules="required">
        <option value="select" disabled selected>Select Printer Type</option>
          <option value="Laser Printer">Laser Printer</option>
          <option value="Solid Ink Printer">Solid Ink Printer</option>
          <option value="LED Printer">LED Printer</option>
          <option value="3D Printer">3D Printer</option>
        </select>
        
        <textarea id="description" name ="description" class="btn"
        placeholder="Description" v-model="product.description"
        required :rules="required"> </textarea>             

        <input type="submit" class="send" name="create"
        value="Add printer" @click="create">
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
       product: {
        title: null,
        description: null,
        username: null,
        printerType: 'select'
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

  mounted () {
    if (!this.isUserLoggedIn) {
    this.$router.push({name: 'Login'})
    return
    }  
  },

  methods: {
    async create () {
      this.product.username = this.user.username
      const areAllFilled = Object.keys(this.product).every(key => !!this.product[key])
      if (!areAllFilled || this.product.printerType == 'select') {
        this.error = 'You need to fill in all required fields and chose printer type'
        return
      }
      
      try{
        await ProductsService.createProduct(this.product)
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