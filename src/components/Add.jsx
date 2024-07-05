
import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const Add = () => {
  const [form, setForm] = useState({
    productName: '',
    description: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', form);
    // You can add the logic for form submission here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="productName"
            label="Product Name"
            fullWidth
            value={form.productName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Description"
            fullWidth
            value={form.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={form.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="category"
            label="Category"
            fullWidth
            value={form.category}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Add Product</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Add
