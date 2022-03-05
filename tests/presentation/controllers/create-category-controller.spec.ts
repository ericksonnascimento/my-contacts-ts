import { CreateCategory } from '@/domain/usecases';
import { CreateCategoryController } from '@/presentation/controllers';

const mockRequest = (): CreateCategoryController.Request => ({
  name: 'any_category_name',
});

type SutType = {
  controller: CreateCategoryController;
  useCase: CreateCategory;
};

const sut = (): SutType => {
  const createCategoryUseCase: jest.Mocked<CreateCategory> = {
    perform: jest.fn(),
  };

  const controller = new CreateCategoryController(createCategoryUseCase);

  return {
    controller,
    useCase: createCategoryUseCase,
  };
};

describe('CreateCategory Controller', () => {
  test('Should return 500 if use case throws', async () => {
    const { controller, useCase } = sut();
    const error = new Error('any_error');

    jest.spyOn(useCase, 'perform').mockRejectedValueOnce(error);

    const httpResponse = await controller.handle(mockRequest());

    expect(httpResponse.statusCode).toBe(500);
  });

  test('Should return 201 on success', async () => {
    const { controller } = sut();

    const httpResponse = await controller.handle(mockRequest);

    expect(httpResponse.statusCode).toBe(201);
  });
});
