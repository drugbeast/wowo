package com.example.wowo.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.wowo.models.Expression;

@Repository
public interface HistoryRepository extends CrudRepository<Expression, Integer> {
}
