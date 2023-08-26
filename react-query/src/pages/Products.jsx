
import { useMutation, useQuery } from 'react-query'
import Edit from '../components/Edit'

const getAllProducts = async () => {
    const res = await fetch('http://localhost:5500/products?_limit=10')
    const jRes = await res.json()
    return jRes
}
const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5500/products/${id}`, { method: 'DELETE' })
    const jRes = await res.json()
    return jRes
}



export default function Products() {

    const { data, isLoading, error } = useQuery('products', getAllProducts)
    const deleteMutatation = useMutation((id) => deleteProduct(id)) // we can use mutations directly! look at onclick



    if (isLoading) return (<p>loading ...</p>)
    if (error) return (<p>{JSON.stringify(error)}</p>)
    return (
        <main className='container my-5'>
            <section>
                <h1>Products</h1>
                <div className='row gap-3'>
                    {deleteMutatation.isError && <p className='text-danger'>error while deleting the product</p>}
                    {deleteMutatation.isLoading && <p className='text-warning'>deleting the product ...</p>}
                    {data?.map((p) => (
                        <div key={p.id} className='col-md-3 card p-3'>
                            <h6>{p.title}</h6>
                            <p>{p.description}</p>
                            <p>{p.price}$</p>
                            <button onClick={() => deleteMutatation.mutate(p.id)} className='btn btn-sm btn-danger w-25'>Delete</button>
                            <hr />
                            <Edit id={p.id} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
