import { ContextDataProductProvider } from 'context/ContextProduct';
import { RoutesApp } from 'routes/index.routes';

export const App = () => {
  return (
    <>
      <ContextDataProductProvider>
        <RoutesApp />
      </ContextDataProductProvider>
    </>
  );
};