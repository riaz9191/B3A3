import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload:TProduct)=>{
  const result =new Product(payload)
  await result.save();
  return result
}

const getAllProducts = async()=>{
  const result = await Product.find()
  return result
}

export const ProductServices = {
  createProduct,
  getAllProducts,
  // getProductById,
  // updateProduct,
  // deleteProduct,
  // searchProducts,
};
