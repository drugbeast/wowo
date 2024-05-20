import static org.junit.Assert.*;
import org.junit.Test;
import algorithms.MathLibrary;

public class MathLibraryTest {

    @Test
    public void testFactorial() {
        assertEquals(1, MathLibrary.factorial(0));
        assertEquals(1, MathLibrary.factorial(1));
        assertEquals(2, MathLibrary.factorial(2));
        assertEquals(6, MathLibrary.factorial(3));
        assertEquals(24, MathLibrary.factorial(4));
    }

    @Test
    public void testFibonacci() {
        assertEquals(0, MathLibrary.fibonacci(0));
        assertEquals(1, MathLibrary.fibonacci(1));
        assertEquals(1, MathLibrary.fibonacci(2));
        assertEquals(2, MathLibrary.fibonacci(3));
        assertEquals(3, MathLibrary.fibonacci(4));
        assertEquals(5, MathLibrary.fibonacci(5));
    }

    @Test
    public void testIsPrime() {
        assertFalse(MathLibrary.isPrime(0));
        assertFalse(MathLibrary.isPrime(1));
        assertTrue(MathLibrary.isPrime(2));
        assertTrue(MathLibrary.isPrime(3));
        assertFalse(MathLibrary.isPrime(4));
        assertTrue(MathLibrary.isPrime(5));
        assertFalse(MathLibrary.isPrime(6));
        assertTrue(MathLibrary.isPrime(7));
    }

    @Test
    public void testAdd() {
        assertEquals(4.0, MathLibrary.add(2.0, 2.0), 0.0001);
        assertEquals(-2.5, MathLibrary.add(-3.0, 0.5), 0.0001);
    }

    @Test
    public void testSubtract() {
        assertEquals(3.0, MathLibrary.subtract(5.0, 2.0), 0.0001);
        assertEquals(2.5, MathLibrary.subtract(3.0, 0.5), 0.0001);
    }

    @Test
    public void testMultiply() {
        assertEquals(6.0, MathLibrary.multiply(2.0, 3.0), 0.0001);
        assertEquals(-6.0, MathLibrary.multiply(2.0, -3.0), 0.0001);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        MathLibrary.divide(6.0, 0.0);
    }

    @Test
    public void testDivide() {
        assertEquals(2.0, MathLibrary.divide(6.0, 3.0), 0.0001);
        assertEquals(-2.0, MathLibrary.divide(6.0, -3.0), 0.0001);
    }
}
