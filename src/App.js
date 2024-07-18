import React from "react"
function App() {
    const title = 'Blog Post'
    const body = 'This is my Blog Post'
    const comments = [
        { id: 1, text: "Come One" },
        { id: 2, text: "Come Two" },
        { id: 3, text: "Come Three" },
        { id: 4, text: "Come Four" },
    ]

    const loading = false;
    const showComments = true;
    const commentBlock = (<div className="comments">
        {Math.random() * (5 + 5)}
        <h3>{comments.length}</h3>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{index}:   {comment.text} </li>
            ))}
        </ul>
    </div>)

    if (loading) {
        return <h1>Loading....</h1>
    }

    return (
        // Modern React 
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>
                {body}
            </p>
            {showComments && commentBlock}




            { /* <label htmlFor=""></label> */}
        </div>
    )


    //    Old Method for previous versions
    // return (
    //     React.createElement('div', { className: 'container' }, React.createElement('h1', {}, 'My App'))
    // )
}
export default App
