const mongoose = require('mongoose');
const {Schema} = mongoose;
// const Schema = mongoose.Schema; <-- destructured above. 

//create a user schema with and object that describes all the different properties and the type of the property
//We can add more properties when ever we want.
const userSchema = new Schema({
    googleId: String,
    credits: {type: Number, default: 0}
});

//this creates the model class first arg is name of collection second the schema to use
//tells mongoose that we want to create a collection called users if it already exists it uses the exsiting collection
mongoose.model('users',userSchema)

