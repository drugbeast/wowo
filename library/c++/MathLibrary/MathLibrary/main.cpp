#include "MathLibrary.h"
#include <iostream>

int main() {
    // Examples of using functions from MathLibrary

    // Calculate factorial
    std::cout << "Factorial of 5: " << MathLibrary::factorial(5) << std::endl;

    // Calculate Fibonacci number
    std::cout << "Fibonacci of 6: " << MathLibrary::fibonacci(6) << std::endl;

    // Check if a number is prime
    std::cout << "Is 11 a prime number? " << (MathLibrary::isPrime(11) ? "Yes" : "No") << std::endl;

    // Example of solving a system of linear equations
    double A[2][2] = { {2, 3}, {1, -2} };
    double B[2] = { 5, -3 };
    double* X = MathLibrary::solveLinearEquations((double**)A, B, 2);
    std::cout << "Solution for the system of linear equations: X[0] = " << X[0] << ", X[1] = " << X[1] << std::endl;
    delete[] X;

    // Example of evaluating an equation
    std::string equation = "x^2 + 3 * x - 4";
    double result = MathLibrary::evaluateEquation(equation, 2.5);
    std::cout << "Result of evaluating equation " << equation << " at x = 2.5: " << result << std::endl;

    // Example of finding the root of an equation using the bisection method
    std::function<double(double)> equationFunction = [](double x) { return x * x - 4; };
    double root = MathLibrary::bisectionMethod(0, 3, equationFunction, 0.001);
    std::cout << "Approximate root of the equation x^2 - 4 = 0 between 0 and 3: " << root << std::endl;

    return 0;
}
