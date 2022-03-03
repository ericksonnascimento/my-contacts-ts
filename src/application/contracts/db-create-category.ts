import { CreateCategory } from '@/domain/usecases/create-category';

export interface DbCreateCategory {
  create(input: CreateCategory.Input): Promise<CreateCategory.Output>;
}
