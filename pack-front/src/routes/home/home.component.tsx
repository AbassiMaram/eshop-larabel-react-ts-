// src/routes/home/home.component.tsx
import React from 'react';
import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
import { useCategoryContext } from '../../contexts/categories.context';
import { Category } from '../../types/category';

const Home: React.FC = () => {
  const { categories } = useCategoryContext(); // Assurez-vous que useCategoryContext renvoie des Category[]

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
