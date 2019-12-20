const mongoose = require ('../database/connections');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
        name:{type:String},
        image:{type:String},
        price:{type:Number},
        description:{type:String},
        specification:{type:Schema.Types.Mixed},
        category:{
                type:Schema.Types.ObjectId,
                ref:'category'}
        
})

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel;