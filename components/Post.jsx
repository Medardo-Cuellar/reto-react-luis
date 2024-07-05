function Post({title, body, author, date}){
    return (
        <div className=" mx-2 mb-4 border rounded-lg p-4 border-grey-200">
            <h1 className="text-center text-blue-500 text-xl font-bold">{title}</h1>
            <p className="ms-4">{body}</p>
            <div className="flex flex-row justify-between">
            <p className="ms-6">By: {author}</p>
            <p className="me-4">{date}</p>
            </div>

        </div>
    )
}
export default Post;