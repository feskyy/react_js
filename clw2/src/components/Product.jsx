import React from 'react';

function Product(props) {
  const { title, price, inStock, description, rating, tags } = props;
  
  const hasDiscount = tags.includes('Скидка');
  
  const discountPrice = hasDiscount ? Math.round(price * 0.9) : price;
  
  const stars = '⭐'.repeat(rating);
  



  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU') + '₸';
  };

  return (
    <div style={styles.product}>
      <h3 style={styles.title}>{title}</h3>
      
      <p style={styles.description}>{description}</p>
      
      <div style={styles.rating}>
        Рейтинг: {stars}
      </div>
      
      <div style={styles.priceSection}>
        {inStock ? (
          <div>
            {hasDiscount && (
              <span style={styles.oldPrice}>
                {formatPrice(price)}
              </span>
            )}
            <span style={styles.price}>
              {formatPrice(discountPrice)}
            </span>
            {hasDiscount && (
              <span style={styles.discount}>-10%</span>
            )}
          </div>
        ) : (
          <span style={styles.outOfStock}>Нет в наличии</span>
        )}
      </div>
      
      <div style={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  product: {
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    maxWidth: '300px'
  },
  title: {
    color: '#333',
    marginTop: '0'
  },
  description: {
    color: '#666',
    fontSize: '14px'
  },
  rating: {
    color: '#ff9900',
    fontSize: '16px',
    marginBottom: '10px'
  },
  priceSection: {
    marginBottom: '10px'
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2ecc71',
    marginRight: '10px'
  },
  oldPrice: {
    fontSize: '16px',
    textDecoration: 'line-through',
    color: '#999',
    marginRight: '10px'
  },
  discount: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '12px'
  },
  outOfStock: {
    color: '#e74c3c',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px'
  },
  tag: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '12px'
  }
};

export default Product;

