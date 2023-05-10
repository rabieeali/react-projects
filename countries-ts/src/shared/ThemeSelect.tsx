import { ChangeEvent } from 'react';
import { changeTheme } from '@/app/features/themeSlice';
import { useDispatch } from 'react-redux';


interface ThemeMap {
    [key: string]: string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
}

export const themeMap: ThemeMap = {
    '1': 'simplex.css',
    '2': 'dark.css',
    '3': 'neon.css',
    '4': 'morph.css'
}

const ThemeSelect = () => {
    const dispatch = useDispatch()

    const themeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedTheme = e.target.value
        dispatch(changeTheme(selectedTheme))
    }

    return (
        <>
            <select className="form-select" onChange={themeHandler} defaultValue="1">
                <option value="1">Light</option>
                <option value="2">Dark</option>
                <option value="3">Neon</option>
                <option value="4">Morph</option>
            </select>
        </>
    )
}

export default ThemeSelect