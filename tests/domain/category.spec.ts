import { Category } from '@/domain/models';

describe('Category', () => {
  test('Should create a category', () => {
    const category = new Category('any_id', 'any_name');
    expect(category.name).toBe('any_name');
  });
});
