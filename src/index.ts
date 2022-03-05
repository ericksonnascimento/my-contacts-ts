import 'module-alias/register';
import { CategoryRepository } from '@/infra/db';

(async () => {
  const repo = new CategoryRepository();

  const category = await repo.create({
    name: 'Informática',
  });

  console.log('category', category);
})();
