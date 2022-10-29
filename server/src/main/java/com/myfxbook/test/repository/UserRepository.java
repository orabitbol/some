package com.myfxbook.test.repository;

import com.myfxbook.test.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
}
