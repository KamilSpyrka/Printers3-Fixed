const {Product} = require('../models')
const jwt = require('jsonwebtoken')

module.exports = {
    async getProducts (req, res) {
        try {
            let products = null
            const search = req.query.search
            const { Op } = require('sequelize')
        
            if (search) {
              products = await Product.findAll({
                where: {
                  [Op.or]: ['title', 'description', 'printerType']
                  .map(key => ({[key]: {
                      [Op.like]: `%${search}%`
                    }
                  }))
                }
              })
            }
            else {
                products = await Product.findAll()
            }

            res.send(products)
        }
        catch (err) {
            res.status(500).send({
                error: 'An Error has occured1'
            })
        }
    },

    async createProduct (req, res) {
        try {
            productData = req.body
            productData.username = req.user.username
            const product = await Product.create(productData)
            res.send(product)
        }
        catch (err) {
            res.status(500).send({
                error: 'An Error has occured'
            })
        }
    },

    async putProduct (req, res) {
        productData = req.body
        if (productData.username == req.user.username || req.user.role=='admin')
        {
            try {
                const product = await Product.update(productData, {
                    where: {id: req.params.productId}
                })
                res.send(productData)
            }
            catch (err) {
                res.status(500).send({
                    error: 'An Error has occured'
                })
            }
        }
        else {
            res.status(401).send({
                error: 'Unauthorized'
            })
        }
    },
    
    async showProduct (req, res) {
        try {
            const product = await Product.findByPk(req.params.productId)
            res.send(product)
        }
        catch (err) {
            res.status(500).send({
                error: 'An Error has occured'
            })
        }
    },

    async deleteProduct (req, res) {
        try {
            const {productId} = req.params
            const product = await Product.findByPk(productId)
            if(!product) {
                return res.status(204).send({
                    error: productId
                })
            }
            if(product.username == req.user.username || req.user.role=='admin')
            {
                await product.destroy()
                res.send(product)
            }
            else {
                res.status(401).send({
                    error: 'Unauthorized'
                })
            }

        }
        catch (err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

}