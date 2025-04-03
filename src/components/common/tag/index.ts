import { lazy } from 'react';
import withSuspense from '../suspense';

const Tag = withSuspense(lazy(() => import('./Tag')));

export default Tag;
