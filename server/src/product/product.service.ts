import { Product, Prisma } from '@prisma/client';
import prisma from '../configs/prisma.config';

export async function createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
	return prisma.product.create({ data });
}

export async function getProducts(): Promise<Product[]> {
	return prisma.product.findMany();
}

export async function getProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product | null> {
	return prisma.product.findUnique({ where });
}

export async function updateProduct(params: {
	where: Prisma.ProductWhereUniqueInput;
	data: Prisma.ProductUpdateInput;
}): Promise<Product> {
	return prisma.product.update({ ...params });
}
