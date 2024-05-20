#include "MathLibrary.h"

// Method to calculate factorial
int MathLibrary::factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

// Method to calculate Fibonacci number
int MathLibrary::fibonacci(int n) {
    if (n <= 1)
        return n;

    int prev1 = 0;
    int prev2 = 1;
    int fib = 0;

    for (int i = 2; i <= n; i++) {
        fib = prev1 + prev2;
        prev1 = prev2;
        prev2 = fib;
    }

    return fib;
}

// Method to check if a number is prime
bool MathLibrary::isPrime(int n) {
    if (n <= 1)
        return false;
    for (int i = 2; i <= std::sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

// Method to solve a system of linear equations (SLE) using Gaussian elimination
double* MathLibrary::solveLinearEquations(double** A, double* B, int n) {
    double* X = new double[n];

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            double factor = A[j][i] / A[i][i];
            for (int k = i; k < n; k++) {
                A[j][k] -= factor * A[i][k];
            }
            B[j] -= factor * B[i];
        }
    }

    for (int i = n - 1; i >= 0; i--) {
        double sum = 0.0;
        for (int j = i + 1; j < n; j++) {
            sum += A[i][j] * X[j];
        }
        X[i] = (B[i] - sum) / A[i][i];
    }

    return X;
}

// Method to evaluate a mathematical expression
double MathLibrary::evaluateEquation(const std::string& equation, double x) {
    // Implementation of this method might require an external library for mathematical expression evaluation
    // This example does not implement it
    return 0.0;
}

// Method to find the root of an equation using the bisection method
double MathLibrary::bisectionMethod(double left, double right, std::function<double(double)> equationFunction, double epsilon) {
    // Apply the bisection method
    double c = (left + right) / 2;
    while ((right - left) / 2 > epsilon) {
        if (equationFunction(c) == 0)
            return c;
        else if (equationFunction(c) * equationFunction(left) < 0)
            right = c;
        else
            left = c;
        c = (left + right) / 2;
    }
    return c;
}

// Method to add two numbers
double MathLibrary::add(double a, double b) {
    return a + b;
}

// Method to subtract one number from another
double MathLibrary::subtract(double a, double b) {
    return a - b;
}

// Method to multiply two numbers
double MathLibrary::multiply(double a, double b) {
    return a * b;
}

// Method to divide one number by another
double MathLibrary::divide(double a, double b) {
    if (b == 0) {
        throw std::invalid_argument("Division by zero!");
    }
    return a / b;
}
