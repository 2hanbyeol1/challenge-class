import { useLoaderData } from "react-router-dom";

export default function PostDetailPage() {
  const post = useLoaderData();

  return (
    <h1>
      PostDetailPage
      <h6>{post.title}</h6>
      <p style={{ fontSize: "1rem" }}>{post.body}</p>
    </h1>
  );
}
