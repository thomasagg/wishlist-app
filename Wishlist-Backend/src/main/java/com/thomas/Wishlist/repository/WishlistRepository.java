package com.thomas.Wishlist.repository;

import com.thomas.Wishlist.model.WishlistItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface WishlistRepository extends MongoRepository<WishlistItem, String> {
    List<WishlistItem> findByName(String name);
}
