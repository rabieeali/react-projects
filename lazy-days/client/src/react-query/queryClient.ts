import { QueryClient } from 'react-query';

import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from '../theme';

const toast = createStandaloneToast({ theme });

function queryErrorHandler(error: unknown): void {
    // error is type unknown because in js, anything can be an error (e.g. throw(5))
    const title =
        error instanceof Error ? error.message : 'error connecting to server';

    // prevent duplicate toasts
    toast.closeAll();
    toast({ title, status: 'error', variant: 'subtle', isClosable: true }); // have to add more options on standAlone toasts
}

// to satisfy typescript until this file has uncommented contents
// we can also use error boundary as an alternative!
// it has a hook named useErrorBoundary , you really should read more about it!
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler // we are using default error handler, we do not have to worry about adding error handling to each query! unless we want to override the default!
        }
    }
});
