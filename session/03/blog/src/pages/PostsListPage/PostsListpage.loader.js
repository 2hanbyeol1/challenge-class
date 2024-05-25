export default async function postsListPageLoader() {
  // 데이터 불러오기
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
