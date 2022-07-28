const mongoose = require('mongoose')
const DATABASE_URI = process.env.DATABASE_URI
const connect = async() => {
   try {
     await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('Banco de dados conectado')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}