import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { savePost } from "../lib/api"


export default function AddNewPost() {
    const data = useActionData()
    const navigation = useNavigation()

    return (
        <>
            {data && data.status && <div className="alert alert-danger" role="alert">{data.message}</div>}
            <Form className="form-group card p-3 gap-4" method="post" action="/add-post">
                <input name="title" className="form-control" type="text" />
                <textarea name="content" className="form-control" rows={3} />
                <button disabled={navigation.state === 'submitting'} className="btn btn-primary">
                    {navigation.state === 'submitting' ? 'submitting' : 'submit'}
                </button>
            </Form>
        </>
    )
}


export async function action({ request }) {
    const formData = await request.formData()
    const post = {
        title: formData.get('title'),
        body: formData.get('content')
    }
    try {
        await new Promise((res, rej) => (setTimeout(() => { res() }, 2000)))
        await savePost(post)
    } catch (err) {
        if (err.status === 422) {
            // throw err // goes to nearest error page
            return err // we return stay in this page (you can use useAction to get the error)
        }
        throw err
    }
    return redirect('/')
}