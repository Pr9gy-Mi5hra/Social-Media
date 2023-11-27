

const Product=require("../model/Product");

//get all product

const product_all=async (req,res)=>{
   try{
    const products=await Product.find();
    res.json(products);
   }catch (error){
    res.json({message:error});
   }
};
//single product 
const product_details= async (req,res)=>{};
//add new product
const product_create= async (req,res)=>{};

//update product 
const product_update=async (req,res)=>{
    // try{
    //     const product ={
    //       Username:req.body.Username,
    //       Email:req.body.Email,
    //       Password:req.body.Password,
    //       Name:req.body.Name


    //     };
    //     const updatedProduct=await Product.findByIdAndUpdate(
    //     { _id:req.params.productId},
    //     product
    //     );
    //     res.json(updatedProduct);
    // } catch (error){
    //     res.json({message:error});
    // }
};
//delete product
const product_delete=async (req,res)=>{};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}