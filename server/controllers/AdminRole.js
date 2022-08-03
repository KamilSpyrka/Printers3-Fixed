const {User} = require('../models')

module.exports = {
    async addAdmin(req, res) {
        try {
            const user = await User.findOne({
                where: {
                  username : 'admin3'
                }
              })
              if(!user) {
                const admin = {
                    "username": "admin3",
                    "email": "admin3@gmail.com",
                    "password": "admin3",
                    "role":"admin"
,                }
                await User.create(admin)
              }
         
        }
        catch(err){
            console.log(err.message)
        }
    }
}