

const HowToUsePage = () => {
    return (
        <div className="App cap">
            <h1>my dear gorgeous friends here's the Documentation</h1>
            <p>this app works with <strong>vite react typescript</strong> and <strong>json-server</strong> as the restful api </p>
            <p>to start, first you have to <code>npm install</code></p>

            <p>then make sure to run the json-server with <code>npm run server</code></p>
            <p>to run the app you need to <code>npm run dev</code></p>
            <p>your database is going to be a json file located at <code>src/db/db.json</code></p>
            <p>after delete/put requests it will be mutated!</p>
            <p>so I've provided the whole data at  <code>src/mockdata.txt</code></p>
            <p>just copy paste it if you ever wanted!</p>
            <strong className="bold">Make Sure To Star This Repo at <a className="text-green" href="https://github.com/rabieeali/contacts-app-for-aps-students" target="_blank">This Link</a> 😍</strong>
            <p>enjoy 🍻</p>
        </div>
    )
}

export default HowToUsePage