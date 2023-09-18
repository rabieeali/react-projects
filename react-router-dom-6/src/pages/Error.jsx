import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <main>
                <h1 className='text-danger'>An error occurred!</h1>
                <p className='text-warning'>{error.statusText}</p>
                <p className='text-warning'>{error.message}</p>
            </main>
        </>
    );
}