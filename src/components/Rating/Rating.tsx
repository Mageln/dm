import * as React from 'react';
import { Rating } from '@mui/material';

interface HalfRatingProps {
  product: any; 
}

const HalfRating: React.FC<HalfRatingProps> = ({ product }) => {
  return (
    <Rating name="half-rating" value={product.rating} readOnly />
  );
};

export default HalfRating;