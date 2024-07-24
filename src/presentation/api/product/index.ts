import express from 'express';
import ProductController from './productController';
import ProductUsecase from '../../../application/ProductUsecase';
import ProductRepository from '../../../infrastructure/prisma/PrismaProductRepository';

const router = express.Router();
const productRepository = new ProductRepository();
const productUsecase = new ProductUsecase(productRepository);
const productController = new ProductController(productUsecase); 

router.get('/product', productController.getProducts);
router.post('/product', productController.createProduct);
router.get('/product/:id', productController.getProductById);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

export default router;