package algorithms;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.function.Function;

public class MathLibrary {
    // Метод для вычисления факториала
    public static int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n - 1);
    }

    // Метод для вычисления числа Фибоначчи
    public static int fibonacci(int n) {
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

    // Метод для проверки числа на простоту
    public static boolean isPrime(int n) {
        if (n <= 1)
            return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    // Метод для решения системы линейных алгебраических уравнений (СЛАУ) методом Гаусса
    public static double[] solveLinearEquations(double[][] A, double[] B) {
        int n = A.length;
        double[] X = new double[n];

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

    // Метод для вычисления значения уравнения
    public static double evaluateEquation(String equation, double x) {
        try {
            // Получаем менеджер движков скриптов
            ScriptEngineManager manager = new ScriptEngineManager();
            // Получаем JavaScript движок
            ScriptEngine engine = manager.getEngineByName("JavaScript");
            if (engine == null) {
                // Если не удалось получить JavaScript движок, возвращаем NaN
                System.err.println("Failed to obtain JavaScript engine.");
                return Double.NaN;
            }
            // Помещаем переменную x в контекст движка
            engine.put("x", x);
            // Вычисляем значение уравнения
            return (double) engine.eval(equation);
        } catch (ScriptException e) {
            // Если произошла ошибка во время вычисления уравнения, выводим сообщение об ошибке и возвращаем NaN
            System.err.println("Error evaluating the equation: " + e.getMessage());
            return Double.NaN;
        }
    }

    // Метод для нахождения корня уравнения методом бисекции
    public static double bisectionMethod(double left, double right, Function<Double, Double> equationFunction, double epsilon) {
        // Применяем метод бисекции
        double c = (left + right) / 2;
        while ((right - left) / 2 > epsilon) {
            if (equationFunction.apply(c) == 0)
                return c;
            else if (equationFunction.apply(c) * equationFunction.apply(left) < 0)
                right = c;
            else
                left = c;
            c = (left + right) / 2;
        }
        return c;
    }

    // Метод для сложения двух чисел
    public static double add(double a, double b) {
        return a + b;
    }

    // Метод для вычитания одного числа из другого
    public static double subtract(double a, double b) {
        return a - b;
    }

    // Метод для умножения двух чисел
    public static double multiply(double a, double b) {
        return a * b;
    }

    // Метод для деления одного числа на другое
    public static double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero!");
        }
        return a / b;
    }
}
