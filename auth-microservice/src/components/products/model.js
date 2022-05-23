import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    },
    marca:{
        type:String,
        required:true,
    },
    peso:{
        type:Number,
        required:true,
    }

});

const productModel = mongoose.model('products',productSchema);

export default productModel 