import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array1[][] = new int[3][3];
        int current[][] = new int[3][3];

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                array1[i][j] = sc.nextInt();
            }
        }

        // copy data to another array
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                current[i][j] = array1[i][j];
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print("Print\n");
                System.out.print(current[i][j] + " \n");
            }
        }
    }
}
