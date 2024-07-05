
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const Read = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products', err));
  }, []);

  return (
    
    <Grid container spacing={2} justifyContent="center">
    
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: '100%', margin: '5% auto', textAlign: 'left' }}>
            <CardMedia
              component="img"
              height="194"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2">${product.price}</Typography>
              <Typography variant="body2">{product.category}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Read;

