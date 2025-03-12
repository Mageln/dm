import { fetchProducts } from "@/api/api";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  picture: string;
  rating: number;
}

const Cart: React.FC<{ currentPage: number; setCurrentPage: (page: number) => void }> = ({ currentPage, setCurrentPage }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(currentPage);
        setProducts(data?.data.data || []);
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, fetchProducts]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Карточки</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
              <p>Цена: {product.price} руб.</p>
              <img src={product.picture} alt={product.title} style={{ width: '100px', height: 'auto' }} />
              <p>Рейтинг: {product.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет доступных продуктов</p>
      )}
    </div>
  );
};

export default Cart;