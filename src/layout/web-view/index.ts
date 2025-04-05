import { lazy } from 'react';
import withSuspense from '../../common-component/suspense';

const WebView = withSuspense(lazy(() => import('./WebView')));

export default WebView;
