import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = new Product(payload);
  await result.save();
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

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

const updateProduct = async (productId: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  // deleteProduct,
  // searchProducts,
};
