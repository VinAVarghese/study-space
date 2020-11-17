import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {

        // Initializing Scanner Object (to read input)
        Scanner scanner = new Scanner(System.in);

        // Welcome Print out
        System.out.println("Welcome To Java FizzBuzz");

        // Number Input
        System.out.print("Enter Number: ");
        int number = scanner.nextInt();

        // If Statement Determining Output
        if (number % 5 == 0 && number % 3 == 0) {
            System.out.println("FizzBuzz");
        } else if (number % 3 == 0) {
            System.out.println("Buzz");
        } else if (number % 5 == 0) {
            System.out.println("Fizz");
        } else {
            System.out.println(number);
        }
    }
}