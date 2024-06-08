import { TProduct } from './product.interface';
import { Product } from './product.model';

//for creating product
const createProduct = async (payload: TProduct) => {
  const result = new Product(payload);
  await result.save();
  return result;
};

//for getting all product
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

//for getting product by id
const getProductById = async (productId: string) => {
  try {
    const result = await Product.findById(productId);
    if (!result) {
      throw new Error('Product not found');
    }
    return result;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
//for updating product by id
const updateProduct = async (productId: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};
//for deleting product by id

const deleteProduct = async (productId: string) => {
  await Product.findByIdAndDelete(productId);
};
//for searching product by term

const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i'); // 'i' makes text case-insensitive
  const result = await Product.find({
    $or: [{ tags: { $regex: regex } }],
  });
  return result
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
