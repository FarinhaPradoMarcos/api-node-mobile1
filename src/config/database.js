const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

sequelize.authenticate()
            .then(() => {
                console.log('200(ok)')
                return sequelize.sync()
            })
            .catch(err => {
                console.error('418')
            })

module.exports = sequelize;