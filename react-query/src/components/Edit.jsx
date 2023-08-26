import { useState } from 'react'
import { useMutation } from 'react-query'


export default function Edit(props) {
    const [updatedTitle, setUpdatedTitle] = useState('')

    const editProduct = async (id, title) => {
        const res = await fetch(`http://localhost:5500/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            }),
        });

        const jRes = await res.json();
        return jRes;
    };

    const updateMutation = useMutation(() => editProduct(props.id, updatedTitle))
    return (
        <>
            <div className='d-flex'>
                <input className='form-control w-50 rounded-0' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
                <button className='btn btn-sm btn-primary rounded-start-1'
                    onClick={() => updateMutation.mutate(props.id, updatedTitle)}
                >edit</button>
            </div>
            {updateMutation.isSuccess && <p>updated successfully!</p>}
        </>
    )
}
