import { Controller } from '@/presentation/contracts';
import { CreateCategoryController } from '@/presentation/controllers';
import { makeCreateCategory } from '@/main/factories/usecases';

export const makeCreateCategoryController = (): Controller => {
  const controller = new CreateCategoryController(makeCreateCategory());
  return controller;
};
