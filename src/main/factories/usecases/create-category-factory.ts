import { CreateCategoryService } from '@/application/services';
import { CreateCategory } from '@/domain/usecases';
import { CategoryRepository } from '@/infra/db';

export const makeCreateCategory = (): CreateCategory => {
  const createCategoryRepo = new CategoryRepository();
  const createCategoryService = new CreateCategoryService(createCategoryRepo);

  return createCategoryService;
};
