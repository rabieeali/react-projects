export async function action({ request }) {
    const data = await request.formData()
    console.log(data.get('email'))
    return null

    // send to bakcend server or etc ...
}
