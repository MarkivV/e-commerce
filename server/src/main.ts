import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import Cors from '@fastify/cors';

async function bootrstap(): Promise<void> {
	const app = Fastify({
		logger: true,
	}).withTypeProvider<TypeBoxTypeProvider>();

	try {
		await app.register(Swagger);
		await app.register(SwaggerUI);
		await app.register(Cors);

		await app.listen({ port: 3000, host: '127.0.0.1' });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

bootrstap();
