import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload:TProduct)=>{
  const result =new Product(payload)
  await result.save();
  return result
}

export const ProductServices = {
  createProduct,
  // getAllProducts,
  // getProductById,
  // updateProduct,
  // deleteProduct,
  // searchProducts,
};
