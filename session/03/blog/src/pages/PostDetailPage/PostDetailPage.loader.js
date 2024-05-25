export default async function postDetailPageLoader({ params }) {
  // 데이터 불러오기
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
