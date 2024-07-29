// src/components/category-item/category-item.component.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  category: {
    image: string;
    title: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { image, title } = category;

  return (
    <div className="category-container">
      <Link to={`/shop/${title}`} className="background-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
