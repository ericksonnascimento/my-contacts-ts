import { Category } from '@/domain/models';

export interface CreateCategory {
  perform(input: CreateCategory.Input): Promise<CreateCategory.Output>;
}

export namespace CreateCategory {
  export type Input = {
    name: string;
  };

  export type Output = {
    category: Category;
  };
}
