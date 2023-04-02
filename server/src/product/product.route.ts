import { FastifyInstance } from 'fastify';
import * as ProductController from './product.controller';

async function productRoutes(fastify: FastifyInstance): Promise<void> {
	fastify.route({
		method: 'GET',
		url: '/',
		schema: {},
		handler: ProductController.getProductsHandler,
	});
}

export default productRoutes;
