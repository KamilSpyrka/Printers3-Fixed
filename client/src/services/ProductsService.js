import Api from '@/services/Api'

export default {
    getProducts (search) {
        return Api().get('products',{
            params: {
                search: search
            }
        })
    },

    createProduct (product) {
        return Api().post('products', product)
    },

    show (productId) {
        return Api().get(`products/${productId}`)
    },

    put(product) {
        return Api().put(`products/${product.id}`, product)
    },
    
    deleteProduct(productId) { 
        return Api().delete(`products/${productId}`)
    }
}

