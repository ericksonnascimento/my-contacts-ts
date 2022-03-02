import { CreateCategory } from '@/domain/usecases/create-category';
import { DbCreateCategory } from '@/application/contracts';

export class CreateCategoryService implements CreateCategory {
  constructor(readonly dbCreateCategory: DbCreateCategory) {}
  async perform(input: CreateCategory.Input): Promise<CreateCategory.Output> {
    return await this.dbCreateCategory.create(input);
  }
}
