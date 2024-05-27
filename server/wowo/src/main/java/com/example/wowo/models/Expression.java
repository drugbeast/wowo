package com.example.wowo.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "history")
public class Expression {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "expression")
  private String expression;

  @Column(name = "date")
  private Date date;

  public int getId() {
    return id;
  }

  public String getExpression() {
    return expression;
  }

  public Date getDate() {
    return date;
  }

  public Expression(int id, String expression, Date date) {
    this.id = id;
    this.expression = expression;
    this.date = date;
  }

  public Expression() {
  }
}
