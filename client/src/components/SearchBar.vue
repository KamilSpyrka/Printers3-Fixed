<template>
    <div class="searchPanel">
        <input type="text" id="search" name ="search" class="btn"
        placeholder="Search for items title, description or sellers username"
        v-model="search" maxlength="50">
    </div>
</template>

<script>
/* eslint-disable */

import _ from 'lodash'
export default {
name: 'SearchBar',

data () {
    return {
        search: '',
    }
},
watch: {
    search: _.debounce(async function(value) {
        const route = {
            name: 'products'
        }
        if (this.search !== '') {
            route.query = {
                search: this.search
            }
        }
        this.$router.push(route)
    }, 300),

    '$route.query.search': {
        immediate: true,
        handler (value) {
            this.search = value
        }
    }
 }
}
</script>

<style scoped>

.searchPanel {
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
input {
    background-color: #fff;
    color: #373737;
    border: 0;
    border-radius: 0;
    border-bottom: 1px #373737 solid;
    padding: 10px;
    font-size: 15px;
}
input:focus {
    outline: 0;
}
input:focus::placeholder {
    color: transparent;
}
@media screen and (max-width: 768px) {
    .searchPanel {
        margin-left: 15px;
        margin-right: 15px;
    }
}
</style>
