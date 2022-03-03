import { DbCreateCategory } from '@/application/contracts';
import { CreateCategoryService } from '@/application/services';
import { mockCategoryInput, mockCategoryOuput } from '@/tests/domain/mocks';

const createCategoryRepo: jest.Mocked<DbCreateCategory> = {
  create: jest.fn(),
};

createCategoryRepo.create.mockResolvedValue(mockCategoryOuput());

describe('Create Category', () => {
  test('Should call DbCreateCategory.create with correct values', async () => {
    const sut = new CreateCategoryService(createCategoryRepo);
    const input = mockCategoryInput();

    await sut.perform(input);

    expect(createCategoryRepo.create).toBeCalledTimes(1);
    expect(createCategoryRepo.create).toBeCalledWith(input);
  });

  test('Should return a category if DbCreateCategory.create satisfy', async () => {
    const sut = new CreateCategoryService(createCategoryRepo);
    const input = mockCategoryInput();

    const category = await sut.perform(input);

    expect(category).toEqual(mockCategoryOuput());
  });

  test('Should throw an error if DbCreateCategory.create fails', async () => {
    const sut = new CreateCategoryService(createCategoryRepo);
    const input = mockCategoryInput();
    const error = new Error('any_error');

    createCategoryRepo.create.mockRejectedValueOnce(error);

    const promise = sut.perform(input);

    expect(promise).rejects.toThrowError(error);
  });
});
