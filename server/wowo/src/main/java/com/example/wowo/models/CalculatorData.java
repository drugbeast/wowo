package com.example.wowo.models;

public class CalculatorData {
  private String function;

  private String expression;

  public String getFunction() {
    return function;
  }

  public String getExpression() {
    return expression;
  }

  public CalculatorData(String function, String expression) {
    this.function = function;
    this.expression = expression;
  }
}
