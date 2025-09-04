import React from 'react';
import Product from './components/Product.jsx';

function App() {
  const products = [
    {
      title: 'Наушники A10',
      price: 12990,
      inStock: true,
      description: 'Лёгкие накладные наушники с микрофоном и шумоподавлением.',
      rating: 4,
      tags: ['Новинка']
    },
    {
      title: 'Смартфон Nova X',
      price: 199990,
      inStock: true,
      description: '6.7" AMOLED экран, 120 Гц, 5000 мА·ч батарея, 256 ГБ памяти.',
      rating: 5,
      tags: ['Скидка']
    },
    {
      title: 'Умная колонка Home Mini',
      price: 24990,
      inStock: false,
      description: 'Голосовой ассистент, Bluetooth, мультирум система.',
      rating: 4,
      tags: ['Популярное']
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Наши товары</h1>
      <div style={styles.productsGrid}>
        {products.map((product, index) => (
          <Product 
            key={index}
            title={product.title}
            price={product.price}
            inStock={product.inStock}
            description={product.description}
            rating={product.rating}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
  },
  productsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  }
};

export default App;

