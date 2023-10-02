import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useAddPostMutation } from "./redux/apiSlice";


const Form = () => {
    const titleRef = useRef()
    const contentRef = useRef()
    const [addPost, { isSuccess }] = useAddPostMutation()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value
        const content = contentRef.current.value
        await addPost({ id: nanoid(), title, body: content })

        if (isSuccess) {
            titleRef.current.value = ''
            contentRef.current.value = ''
        }
    }
    return (
        <form onSubmit={handleSubmit} className="border border-zinc-300 rounded-sm w-[300px] p-3 space-y-3">
            <div className="flex flex-col">
                <label className="text-zinc-500 text-sm">Title</label>
                <input ref={titleRef} className="border border-zinc-300 text-gray-900 text-sm rounded-md p-1" />
            </div>
            <div className="flex flex-col">
                <label className="text-zinc-500 text-sm">Content</label>
                <input ref={contentRef} className="border border-zinc-300 text-gray-900 text-sm rounded-md p-1" />
            </div>
            <button className="bg-cyan-600 text-white text-sm px-4 py-1 block ml-auto rounded-md">Post</button>
        </form>
    )
}

export default Form