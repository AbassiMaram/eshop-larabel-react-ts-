// src/components/directory/directory.component.tsx
import React from 'react';
import { Category } from '../../types/category';

interface DirectoryProps {
  categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  // Utilisez categories dans le composant
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          <img src={category.image} alt={category.name} />
        </div>
      ))}
    </div>
  );
};

export default Directory;
