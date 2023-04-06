package com.example.backend.Repository;

import com.example.backend.Model.Order_;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order_,Integer> {
}
