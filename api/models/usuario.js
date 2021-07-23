// con esto nos llenamos de guita

// {id , saldo , color} --> 

const mongoose = require('mongoose')
const user = 'juan'
const pass = 'agustin'
const dbName = 'usuarios'

const url = 'mongodb://' + user + ':' + pass + '@localhost:27017/' + dbName

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

const document = 'User'

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Number,
    saldo: Number,
    color: String
});

const User = mongoose.model(document, userSchema)

userSchema.statics.findById = function (id, cb) {
    return this.find({ id: id })
}

userSchema.statics.findBySaldo = function (saldo, cb) {
    return this.find({ saldo: saldo })
}

userSchema.statics.findByColor = function (color, cb) {
    return this.find({ color: color })
}

userSchema.methods.addSaldo = function (saldo, cb) {
    return this.update({ $set: { saldo: saldo + this.saldo } })
}

const insertarUsuario = ({ id, saldo = '0', color }, cb) => {
    const newUser = new User({
        id: id,
        saldo: saldo,
        color: color
    })

    newUser.save((err) => {
        if (err) {
            console.log('ERROR')
        }
        else {
            console.log('USUARIO CARGADO CORRECTAMENTE')
        }
    })
}


const insertParams = {
    id: '0',
    color: 'rojo'
}

// https://mongoosejs.com/docs/index.html



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('waw')
    insertarUsuario(insertParams, () => {
        mongoose.connection.close()
    })
})

// mongo admin --username root --password Ft5yCQv2mJV1
//db.createUser({ user:"juan", pwd:"agustin", roles:[{role:"readWrite",db:"usuarios"}]})
