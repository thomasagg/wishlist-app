// Wishlist.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = async () => {
    try {
      const res = await axios.get("/wishlist");
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addWishlistItem = async e => {
    e.preventDefault();
    try {
      const newItem = { name, website };
      await axios.post("/wishlist", newItem);
      getWishlist();
      setName("");
      setWebsite("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWishlistItem = async id => {
    try {
      await axios.delete(`/wishlist/${id}`);
      getWishlist();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="wishlist">
      <form onSubmit={addWishlistItem}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {wishlist.map(item => (
          <li key={item.id}>
            <a href={item.website}>{item.name}</a>
            <button onClick={() => deleteWishlistItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
