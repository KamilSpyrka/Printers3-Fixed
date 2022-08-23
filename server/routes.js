const AuthController = require('./controllers/AuthController')
const ProductsController = require('./controllers/ProductsController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const ensureAuth = require('./controllers/EnsureAuth')

module.exports = (app) => {
    //Auth
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login', AuthController.login)

    //Products
    app.post('/products', ensureAuth, ProductsController.createProduct)
    app.put('/products/:productId', ensureAuth,  ProductsController.putProduct)
    app.get('/products', ensureAuth,  ProductsController.getProducts)
    app.delete('/products/:productId', ensureAuth, ProductsController.deleteProduct)
    app.get('/products/:productId', ensureAuth,  ProductsController.showProduct)
}
