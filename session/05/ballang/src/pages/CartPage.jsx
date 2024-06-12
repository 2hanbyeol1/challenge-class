import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: carts, isLoading } = useQuery({
    queryKey: ["cart", { list: true }],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleClickRemoveItemToCart = async (productId) => {
    await removeItemFromCart(productId, {
      onSuccess: () => {
        alert("상품이 장바구니에서 제거되었습니다");
      },
    });
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  console.log(carts);
  return (
    <div>
      <h1>장바구니</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {carts.items.map((cartItem) => (
            <li key={cartItem.product.id}>
              <h5>{cartItem.product.name}</h5>
              <span>[ {cartItem.quantity} ]</span>
              <button
                onClick={() => handleClickRemoveItemToCart(cartItem.product.id)}
              >
                장바구니에서 빼기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
