<template>
    <div>
      
      <div class="main">
        <nav>
          <h1>Printers</h1>
          <div class="navbar">
            <router-link to="/create">
              <span class="material-icons">
                add
              </span>
            </router-link>
            <span class="material-icons logout" @click="logout">
              logout
            </span> 
          </div>
        </nav>
        <SearchBar />
        <div v-for="item in items" :key="item.id">
          <SingleItem :title="item.title" 
          :description="item.description"
          :username="item.username" 
          :id="item.id"
          :printerType="item.printerType"/>
        </div>
      </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService'
import SingleItem from '@/components/SingleItem.vue'
import SearchBar from '@/components/SearchBar.vue'

import {mapState} from 'vuex'

export default {
  name: 'ProductsList',
  data () {
    return {
        items: [ {
        }]
    }
  },

  components: {
    SingleItem,
    SearchBar
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

  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.items = (await ProductsService.getProducts(value)).data
      }
    }
  },
  methods: {
        logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'Login'})
    }
  }
}

</script>

<style scoped>
.main {
    max-width: 1100px;
    min-height: 1100px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(0,0,0,0.6);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    flex-direction: column;
}
.navbar {
  display: flex;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 30px;
  background-color: #373737;
  max-height: 80px;
  color: white;
}
span {
  font-size: 40px;
  cursor: pointer;
  padding: 10px;
  color: white;
}
a:hover {
  border: none;
}
span {
  transition: 0.5s;
}
span:hover {
  color: green;
}
.logout {
  font-size: 30px;
  padding: 15px;
}
.logout:hover {
  color: red;
}
@media screen and (max-width: 1100px) {
  .main {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>