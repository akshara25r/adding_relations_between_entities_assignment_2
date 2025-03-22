/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ProductCard({ name, description, image, avgRating, totalRatings }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <div style={styles.ratingContainer}>
          <span style={styles.rating}>⭐ {avgRating} / 5</span>
          <span style={styles.totalRatings}>({totalRatings} ratings)</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    margin: '20px',
    transition: '0.3s',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '15px'
  },
  title: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '8px'
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px'
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  rating: {
    fontSize: '14px',
    color: '#f39c12',
    fontWeight: 'bold'
  },
  totalRatings: {
    fontSize: '12px',
    color: '#777'
  }
};

export default ProductCard;
