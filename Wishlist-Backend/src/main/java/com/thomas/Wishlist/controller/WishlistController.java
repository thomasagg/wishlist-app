package com.thomas.Wishlist.controller;// WishlistController.java

import com.thomas.Wishlist.model.WishlistItem;
import com.thomas.Wishlist.repository.WishlistRepository;
import com.thomas.Wishlist.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;

    @PostMapping
    public ResponseEntity<WishlistItem> addWishlistItem(@RequestBody WishlistItem item) {
        WishlistItem addedItem = wishlistService.addItem(item);
        return new ResponseEntity<>(addedItem, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<WishlistItem>> getWishlist() {
        List<WishlistItem> items = wishlistService.getItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWishlistItem(@PathVariable("id") String id) {
        wishlistService.deleteItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

