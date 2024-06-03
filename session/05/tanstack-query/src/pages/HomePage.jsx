import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"], // 쿼리키는 배열로 만든다. 첫 요소는 데이터의 모델명 string, 두번째 요소는 데이터를 설명하는 정보를 object로 넣는다.
    queryFn: () => api.products.getProducts(),
  });

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   async function init() {
  //     try {
  //       const products = await api.products.getProducts();
  //       setProducts(products);
  //       setIsSuccess(true);
  //     } catch (e) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   init();
  // }, []);

  console.log(products);

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
