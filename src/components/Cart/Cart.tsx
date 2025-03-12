import { fetchProducts } from "@/api/api";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HalfRating from "../Rating/Rating";
import Grid from '@mui/material/Grid2';
interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  picture: string;
  rating: number;
}

interface Pages {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Cart: React.FC<Pages> = ({ currentPage, setCurrentPage }) => {
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
  }, [currentPage]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={1} justifyContent="flex-start" sx={{ paddingLeft: 3 }}>
      {products.length > 0 ? (
        products.map((product: Product) => (
       
            <Card sx={{ width: 250,height:420, borderRadius: '16px' }} key={product.id}> 
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.picture}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <HalfRating product={product} />
                  <Typography variant="body1" color="text.black">
                    {product.price} ₽
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
     
        ))
      ) : (
        <Grid size={4}>
          <p>Нет доступных продуктов</p>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;