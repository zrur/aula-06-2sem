import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
