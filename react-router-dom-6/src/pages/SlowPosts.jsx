import { useLoaderData, defer, Await, useFetcher } from "react-router-dom"
import { getSlowPosts } from "../lib/api"
import { Suspense, useRef } from "react"
import { SlowCards } from "../components"

export default function SlowPosts() {
  const loaderData = useLoaderData()
  const emailRef = useRef()
  const fethcer = useFetcher() // we do not trigger any page transition


  const signupToNewsLetterHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef?.current?.value;
    if (!enteredEmail.includes("@")) {
      return alert('email invalid')
    }
    fethcer.submit(
      // better: use fetcher.Form instead
      { email: enteredEmail },
      { method: 'post', action: '/newsletter' }
    )
  }

  return (
    <div>
      <h1>Slow Posts, You see this page first</h1>
      <fethcer.Form className="form-group d-flex" onSubmit={signupToNewsLetterHandler}>
        <input name='email' className="form-control w-50" ref={emailRef} placeholder="send email" />
        <button className="btn btn-sm btn-success">submit</button>
      </fethcer.Form>

      <br />
      <Suspense fallback={<p className="text-info">Loading ...</p>}>
        <Await resolve={loaderData.slowPosts} errorElement={<p>error loading blog posts</p>}>
          {/*  render props */}
          {(loadedPosts) => <SlowCards posts={loadedPosts} />}
        </Await>
      </Suspense>
    </div>
  )
}


export async function loader() {
  // return defer({ slowPosts: await getSlowPosts() }) // if we add await , we wait until it  is resolved (fetched), then we show the page
  return defer({ slowPosts: getSlowPosts() }) // we see the page first (loading is handled by suspense and await)
}
