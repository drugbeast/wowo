package com.example.wowo.services;

import java.math.BigInteger;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {
  private String expression;

  public CalculatorService(String expression) {
    this.expression = expression;
  }

  public CalculatorService() {
  }

  public BigInteger getFactorial() {
    if (!expression.contains("!"))
      throw new IllegalArgumentException();
    String numberStr = expression.substring(0, expression.length() - 1);
    BigInteger number = new BigInteger(numberStr);
    BigInteger factorial = BigInteger.ONE;

    for (BigInteger i = BigInteger.TWO; i.compareTo(number) <= 0; i = i.add(BigInteger.ONE)) {
      factorial = factorial.multiply(i);
    }

    return factorial;
  }

  public BigInteger getFibonacci() {
    int n = Integer.parseInt(expression);
    BigInteger fib0 = BigInteger.ZERO;
    BigInteger fib1 = BigInteger.ONE;

    if (n == 0) {
      return fib0;
    }

    for (int i = 2; i <= n; i++) {
      BigInteger temp = fib1;
      fib1 = fib0.add(fib1);
      fib0 = temp;
    }

    return fib1;
  }

  public boolean getIsPrime() {
    int number = Integer.parseInt(expression);

    if (number <= 1) {
      return false;
    }

    for (int i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }

    return true;
  }

  public double[][] convertToMatrix(String input) {
    String[] rows = input.split(";");
    int rowCount = rows.length;
    int columnCount = rows[0].split(",").length;

    double[][] matrix = new double[rowCount][columnCount];

    for (int i = 0; i < rowCount; i++) {
      String[] elements = rows[i].replaceAll("[()]", "").split(",");
      for (int j = 0; j < columnCount; j++) {
        matrix[i][j] = Double.parseDouble(elements[j]);
      }
    }

    return matrix;
  }

  public String convertToString(double[] array) {
    StringBuilder sb = new StringBuilder();
    sb.append("(");

    for (int i = 0; i < array.length; i++) {
      sb.append(array[i]);
      if (i < array.length - 1) {
        sb.append(",");
      }
    }

    sb.append(")");

    return sb.toString();
  }

  public String getTheSolutionOfTheSystemByGauss() {
    double[][] coefficients = convertToMatrix(expression);
    int rowCount = coefficients.length;
    int columnCount = coefficients[0].length - 1;

    for (int pivot = 0; pivot < rowCount; pivot++) {
      int maxRowIndex = pivot;
      double maxRowValue = Math.abs(coefficients[pivot][pivot]);

      for (int row = pivot + 1; row < rowCount; row++) {
        double currentRowValue = Math.abs(coefficients[row][pivot]);
        if (currentRowValue > maxRowValue) {
          maxRowIndex = row;
          maxRowValue = currentRowValue;
        }
      }

      double[] tempRow = coefficients[pivot];
      coefficients[pivot] = coefficients[maxRowIndex];
      coefficients[maxRowIndex] = tempRow;

      for (int row = pivot + 1; row < rowCount; row++) {
        double ratio = coefficients[row][pivot] / coefficients[pivot][pivot];
        for (int col = pivot; col < columnCount + 1; col++) {
          coefficients[row][col] -= ratio * coefficients[pivot][col];
        }
      }
    }

    double[] solution = new double[rowCount];

    for (int row = rowCount - 1; row >= 0; row--) {
      double sum = 0.0;
      for (int col = row + 1; col < columnCount; col++) {
        sum += coefficients[row][col] * solution[col];
      }
      solution[row] = (coefficients[row][columnCount] - sum) / coefficients[row][row];
    }

    return convertToString(solution);
  }

  public String getSum() {
    String[] parts = expression.split("\\+");
    double sum = 0.0;
    for (String part : parts) {
      sum += Double.parseDouble(part);
    }
    return sum + "";
  }

  public String getDifference() {
    String[] parts = expression.split("\\-");
    double dif = Double.parseDouble(parts[0]);
    dif -= Double.parseDouble(parts[1]);
    return dif + "";
  }

  public String getComposition() {
    String[] parts = expression.split("\\*");
    double comp = 1.0;
    for (String part : parts) {
      comp *= Double.parseDouble(part);
    }
    return comp + "";
  }

  public String getRelation() {
    String[] parts = expression.split("\\/");
    double rel = Double.parseDouble(parts[0]);
    rel /= Double.parseDouble(parts[1]);
    return rel + "";
  }
}
