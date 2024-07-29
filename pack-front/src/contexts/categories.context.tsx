// src/contexts/categories.context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Category } from '../types/category';

interface CategoryContextType {
  categories: Category[];
  // Ajoutez d'autres propriétés si nécessaire
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // Ajoutez la logique pour mettre à jour les catégories si nécessaire

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Exportez les éléments nécessaires
export { CategoryProvider, CategoryContext };

// Ajoutez un hook pour utiliser le contexte
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};
