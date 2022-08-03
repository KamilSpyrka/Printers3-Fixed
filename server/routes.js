const AuthController = require('./controllers/AuthController')
const ProductsController = require('./controllers/ProductsController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')


module.exports = (app) => {
    //Auth
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login', AuthController.login)

    //Products
    app.post('/products',  ProductsController.createProduct)
    app.put('/products/:productId',  ProductsController.putProduct)
    app.get('/products',  ProductsController.getProducts)
    app.delete('/products/:productId', ProductsController.deleteProduct)

}
