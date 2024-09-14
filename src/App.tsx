import { Suspense, lazy } from 'react';
import LoadingIndicator from 'components/atoms/a-loading-indicator';

const Routes = lazy(() => import('./routes'));

function App() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Routes />
    </Suspense>
  );
}

export default App;
