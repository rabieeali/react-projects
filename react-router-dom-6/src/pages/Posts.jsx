import { useLoaderData } from "react-router-dom"
import { getPosts } from "../lib/api"
import { PostsList } from "../components"

export default function Posts() {
  const loaderData = useLoaderData()

  return (
    <>
      <PostsList posts={loaderData} />
    </>
  )
}

export function loader() {
  return getPosts()
}