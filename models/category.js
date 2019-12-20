const mongoose = require ('../database/connections');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:{type:String},
    products:[{
        type:Schema.Types.ObjectId, 
        ref:'Product'
    }]
    })
const CategoryModel = mongoose.model('Category',CategorySchema);
module.exports=CategoryModel;