import { DbCreateCategory } from '@/application/contracts';
import { Category } from '@/domain/models';
import { CreateCategory } from '@/domain/usecases';
import { prisma } from './client';

export class CategoryRepository implements DbCreateCategory {
  async create(input: CreateCategory.Input): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name: input.name,
      },
    });

    return category;
  }
}
