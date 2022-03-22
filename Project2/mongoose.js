const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/E-com");

    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        company:String
    })

const saveInDB= async ()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({name:"Fan", price: 8000, company: "GFC"})
    let result = await data.save();
    console.log(result);
}
// saveInDB();

const updateInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne({name:"Chair"},{
        $set:{price: 6000, company:"Galaxy Furniture"}
    })
    console.log(data)
}
// updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name:"Helmet"})
    console.log(data)
}
// deleteInDB();

const findInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name:"Chair"});
    console.log(data)
}
// findInDB();



