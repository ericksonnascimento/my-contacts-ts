import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCreateCategoryController } from '../factories';

export default (router: Router): void => {
  router.post('/category', adaptRoute(makeCreateCategoryController()));
};
