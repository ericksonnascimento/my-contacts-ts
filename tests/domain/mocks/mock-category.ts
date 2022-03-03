import { CreateCategory } from '@/domain/usecases';

export const mockCategoryInput = (): CreateCategory.Input => ({
  name: 'any_category_name',
});

export const mockCategoryOuput = (): CreateCategory.Output => ({
  id: 'any_id',
  name: 'any_category_name',
});
