import { FastifyRequest } from 'fastify';
import * as UserService from './user.service';
import { User } from '@prisma/client';

export async function getUsersHandler(req: FastifyRequest): Promise<User[]> {
	return UserService.getUsers();
}
