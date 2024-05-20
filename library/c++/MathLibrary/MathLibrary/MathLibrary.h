#ifndef MATH_LIBRARY_H
#define MATH_LIBRARY_H

#include <cmath>
#include <stdexcept>
#include <functional>
#include <iostream>
#include <string>

class MathLibrary {
public:
    // Method to calculate factorial
    static int factorial(int n);

    // Method to calculate Fibonacci number
    static int fibonacci(int n);

    // Method to check if a number is prime
    static bool isPrime(int n);

    // Method to solve a system of linear equations (SLE) using Gaussian elimination
    static double* solveLinearEquations(double** A, double* B, int n);

    // Method to evaluate a mathematical expression
    static double evaluateEquation(const std::string& equation, double x);

    // Method to find the root of an equation using the bisection method
    static double bisectionMethod(double left, double right, std::function<double(double)> equationFunction, double epsilon);

    // Method to add two numbers
    static double add(double a, double b);

    // Method to subtract one number from another
    static double subtract(double a, double b);

    // Method to multiply two numbers
    static double multiply(double a, double b);

    // Method to divide one number by another
    static double divide(double a, double b);
};

#endif // MATH_LIBRARY_H
