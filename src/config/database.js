const  mongoose  = require("mongoose");

const connect = async() => {
    await mongoose.connect('mongodb://localhost/twitter_db_dev');
}

module.exports = connect;