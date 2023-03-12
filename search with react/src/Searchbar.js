import { useState } from "react";

const Searchbar = ({ posts, setSearchTerm }) => {

    const [matches, setMatches] = useState("");

    const handleChange = (e) => {
        if (!e.target.value) return setSearchTerm(posts)

        const resultArray = posts.filter(p => p.title.includes(e.target.value) || p.body.includes(e.target.value))

        setSearchTerm(resultArray)
        setMatches(resultArray)
    }


    const style = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        right: 0,
        top: '30%',
    }

    return (
        <>
            <form className="my-3 col-md-4 offset-md-4 position-relative">
                <div>

                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <div style={style}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                </div>
            </form>

            <p className="text-center text-primary text-capitalize">{matches.length} matches found</p>
        </>
    )
}

export default Searchbar