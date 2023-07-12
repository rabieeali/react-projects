import { HeartIcon } from '@heroicons/react/24/solid'

export default function Footer() {
    return (
        <footer className='text-center border-top fixed-bottom'>
            <p className="d-flex pt-3 align-items-center justify-content-center gap-1">Made With <HeartIcon className='text-danger' height={20} width={20} /> By <a href='https://github.com/rabieeali' target='_blank'>@rabieeali</a> </p>
        </footer>
    )
}