import Post from "./Post";
function Posts() {
  return (
    <main>
      <Post
      key={2}
      title="Hello World"
      body="This is the body of the post"
      author="John Doe"
      date="2021-01-01"
    />
    <Post
    key={3}
    title="Hello World"
    body="This is the body of the post"
    author="John Doe"
    date="2021-01-01"
  />
    </main>
  );
}
export default Posts;
