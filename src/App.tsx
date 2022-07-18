import { ContextDataCartProvider } from 'context/ContextCard';
import { ContextDataProductProvider } from 'context/ContextProduct';
import { RoutesApp } from 'routes/index.routes';

export const App = () => {
  return (
    <>
      <ContextDataProductProvider>
        <ContextDataCartProvider>
          <RoutesApp />
        </ContextDataCartProvider>
      </ContextDataProductProvider>
    </>
  );
};