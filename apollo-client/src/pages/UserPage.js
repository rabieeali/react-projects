import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SINGLE_USER_QUERY = gql`
  query GetSingleUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
    }
  }
`;

const EDIT_USERNAME_MUTATION = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      username
    }
  }
`;

export default function UserPage() {
    const { id } = useParams();
    const [showEditBtn, setShowEditBtn] = useState(false);
    const [inputVal, setInputVal] = useState("");
    const { data, loading, error } = useQuery(SINGLE_USER_QUERY, {
        variables: { id },
    });

    const [updateUserMutation, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(EDIT_USERNAME_MUTATION);

    const { name, username, email } = data?.user ?? "";

    const handleUpdateUsername = () => {
        if (!inputVal) return alert('fill the form')
        try {
            updateUserMutation({ variables: { id, input: { username: inputVal } } });
        } catch (err) {
            console.log(err)
        } finally {
            setShowEditBtn(false);
        }
    };
    ;

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
        <div className="container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <button
                onClick={() => setShowEditBtn((prev) => !prev)}
                className="btn btn-sm btn-primary"
            >
                Edit Username
            </button>
            {showEditBtn && (
                <>
                    <br />
                    <br />
                    <div className="d-flex">
                        <input
                            style={{ width: '360px' }}
                            className="form-control"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                        <button
                            disabled={mutationLoading}
                            style={{ marginLeft: '-47px', transform: 'scale(0.8)' }}
                            onClick={handleUpdateUsername}
                            className="btn btn-sm btn-info"
                        >
                            Save
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
