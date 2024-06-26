import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint).then((res) => res.data),
  });

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default Posts;
