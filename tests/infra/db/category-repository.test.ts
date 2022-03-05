import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

afterAll(async () => {
  await client.$disconnect();
});

it('should create a category', async () => {
  const category = await client.category.create({
    data: {
      name: 'Test',
    },
  });

  expect(category.name).toBe('Test');
});
