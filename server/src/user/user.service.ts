import { User, Prisma } from '@prisma/client';
import prisma from '../configs/prisma.config';

export async function createUser(data: Prisma.UserCreateInput): Promise<User> {
	return prisma.user.create({ data });
}

export async function getUsers(): Promise<User[]> {
	return prisma.user.findMany();
}

export async function getUser(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
	return prisma.user.findUnique({ where });
}

export async function updateUser(params: {
	where: Prisma.UserWhereUniqueInput;
	data: Prisma.UserUpdateInput;
}): Promise<User> {
	return prisma.user.update({ ...params });
}
