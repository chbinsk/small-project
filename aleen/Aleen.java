public class Aleen {
    public static void main(String[] args) {
        int[] A = {1,2,3};
        int[] B = {6,3,2};
        System.out.println(dot(A, A));
        System.out.println(size(A));
        System.out.println(size(B));
    }

    // Dot product of two arrays
    public static int dot(int[] A, int[] B) {
        int result = 0;
        for(int i = 0; i < A.length; i++) {
            result += A[i] * B[i];
        }
        return result;
    }

    // Size or length of an arrays
    public static double size(int[] A) {
        return Math.sqrt(dot(A, A));
    }
}