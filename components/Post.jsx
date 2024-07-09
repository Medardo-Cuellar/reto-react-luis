import Link from "next/link";
import Image from "next/image";

function Post({ title, image, width, height, body, user, createdAt }) {
  return (
    <div className=" mx-2 mb-4 border rounded-lg p-4 border-grey-200">
      <Image
        src={image}
        height={height}
        width={width}
        alt={image}
        className="object-cover w-auto max-w-xl mx-auto rounded-lg"
      />
      <Link
        className="text-center text-blue-500 text-xl font-bold"
        href={`/post/${title}`}
      >
        {title}
      </Link>
      <p className="ms-4">{body}</p>
      <div className="flex flex-row justify-between">
        <p className="ms-6">By: {user}</p>
        <p className="me-4">{createdAt}</p>
      </div>
    </div>
  );
}
export default Post;
