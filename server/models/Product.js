module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        username: DataTypes.STRING,
        printerType: DataTypes.STRING
    })

    return Product
}