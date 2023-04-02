import { FastifyInstance } from 'fastify';
import * as UserController from './user.controller';

async function productRoutes(fastify: FastifyInstance): Promise<void> {
	fastify.route({
		method: 'GET',
		url: '/',
		schema: {},
		handler: UserController.getUsersHandler,
	});
}

export default productRoutes;
