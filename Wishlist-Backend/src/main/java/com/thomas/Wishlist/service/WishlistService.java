package com.thomas.Wishlist.service;

import com.thomas.Wishlist.model.WishlistItem;
import com.thomas.Wishlist.repository.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {
    private final WishlistRepository wishlistRepository;

    public WishlistService(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    public WishlistItem addItem(WishlistItem item) {
        return wishlistRepository.save(item);
    }

    public List<WishlistItem> getItems() {
        return wishlistRepository.findAll();
    }

    public void deleteItem(String id) {
        wishlistRepository.deleteById(id);
    }
}