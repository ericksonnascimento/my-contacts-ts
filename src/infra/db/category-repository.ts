import { DbCreateCategory } from '@/application/contracts';
import { Category } from '@/domain/models';
import { CreateCategory } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class CategoryRepository implements DbCreateCategory {
  constructor(readonly client: PrismaClient) {}
  async create(input: CreateCategory.Input): Promise<Category> {
    const category = await this.client.category.create({
      data: {
        name: input.name,
      },
    });

    return category;
  }
}
