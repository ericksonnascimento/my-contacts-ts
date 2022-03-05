import { CreateCategory } from '@/domain/usecases';
import { Controller, HttpResponse, serverError, created } from '@/presentation/contracts';

export class CreateCategoryController implements Controller {
  constructor(private readonly createCategory: CreateCategory) {}

  async handle(request: CreateCategoryController.Request): Promise<HttpResponse> {
    try {
      const category = await this.createCategory.perform({
        name: request.name,
      });

      return created(category);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

export namespace CreateCategoryController {
  export type Request = {
    name: string;
  };
}
