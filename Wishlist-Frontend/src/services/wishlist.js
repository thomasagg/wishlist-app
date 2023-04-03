import axios from 'axios';

const baseUrl = 'http://localhost:8080/wishlist';

export const getWishlist = () => {
  return axios.get(baseUrl)
    .then(response => response.data);
};

export const addWishlistItem = (wishlistItem) => {
  return axios.post(baseUrl, wishlistItem)
    .then(response => response.data);
};

export const updateWishlistItem = (id, wishlistItem) => {
  return axios.put(`${baseUrl}/${id}`, wishlistItem)
    .then(response => response.data);
};

export const deleteWishlistItem = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(response => response.data);
};
