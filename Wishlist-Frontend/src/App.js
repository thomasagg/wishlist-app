import React, { useState, useEffect } from 'react';
import { getWishlist, addWishlistItem, updateWishlistItem, deleteWishlistItem } from './services/wishlist';
import Wishlist from './components/Wishlist';

function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlist()
      .then(data => setWishlist(data));
  }, []);

  const handleAddWishlistItem = (wishlistItem) => {
    addWishlistItem(wishlistItem)
      .then(data => setWishlist([...wishlist, data]));
  }

  const handleUpdateWishlistItem = (id, wishlistItem) => {
    updateWishlistItem(id, wishlistItem)
      .then(data => {
        const updatedWishlist = wishlist.map(item => {
          if (item._id === id) {
            return data;
          }
          return item;
        });
        setWishlist(updatedWishlist);
      });
  }

  const handleDeleteWishlistItem = (id) => {
    deleteWishlistItem(id)
      .then(() => {
        const updatedWishlist = wishlist.filter(item => item._id !== id);
        setWishlist(updatedWishlist);
      });
  }

  return (
    <div className="App">
      <Wishlist
        wishlist={wishlist}
        onAddWishlistItem={handleAddWishlistItem}
        onUpdateWishlistItem={handleUpdateWishlistItem}
        onDeleteWishlistItem={handleDeleteWishlistItem}
      />
    </div>
  );
}

export default App;
