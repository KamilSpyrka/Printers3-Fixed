<template>
  <div class="item" >
    
    <h1>
      {{title}}
      <div class="options">
        <span class="material-icons delete"
        v-if="this.$store.state.user.username == this.username
        || this.$store.state.user.role == 'admin' "
        @click="deleteItem">
          delete
        </span>
        <span class="material-icons edit"
        v-if="this.$store.state.user.username == this.username
        || this.$store.state.user.role == 'admin' "
        @click="navigateTo({name: 'product', params: { itemId: id}})">
          edit
        </span>
      </div>
    </h1>
    <h3>{{printerType}}</h3>
    <h4>{{description}}</h4>
  </div>   
</template>

<script>
import {mapState} from 'vuex'
import ProductsService from '@/services/ProductsService'

export default {
  name: 'SingleItem',
  data () {
    return {
    }
  },
  
  async mounted () {
    if (!this.isUserLoggedIn) {
      this.$router.push({name: 'Login'})
      return
    }
  },

  props: [
    'title',
    'description',
    'username',
    'id',
    'printerType'
  ],

  computed: {
    ...mapState([
      'isUserLoggedIn',
    ])
  },

  methods: {
    navigateTo (route) {
    this.$router.push(route)
    },

    async deleteItem () {
      if(confirm("Are you sure you want to delete?")) {
      try {
        await ProductsService.deleteProduct(this.id)
        this.$router.push('products')
      }
      catch(err) {
        console.log(err)
      }
      }

    },
  }
}
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 150px;
    color: #000;
    text-align: center;
    border-bottom: #000 1px solid;
    margin-top: 10px;
}
.item h1 {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
.item h3 {
  margin-left: 10px;
  text-align:start;
  width: 100%;
  color: #3C3C3C;  
}
.item h4 {
  padding: 10px;
  text-align:start;
  width: 100%;
  color: #3C3C3C;
}

span {
  font-size: 30px;
  cursor: pointer;
  padding: 15px;
  color: #000;
  transition: 0.5s;
}
.delete {
  color: #b23b3b;
}
.delete:hover {
  color: #901919;
}
.edit:hover {
  color: #606060;
}
</style>