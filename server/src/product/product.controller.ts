import { FastifyRequest } from 'fastify';
import * as ProductService from './product.service';
import { Product } from '@prisma/client';

export async function getProductsHandler(req: FastifyRequest): Promise<Product[]> {
	return ProductService.getProducts();
}
