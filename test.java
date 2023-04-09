import java.util.*;
import java.util.stream.Stream;

class test {
   static int count = 0;

   public static void main(String[] args) {
      String st = "2347002";
      st = st.replaceAll("0", "5");
      System.out.println(st);
      int ans = Integer.parseInt(st);
      System.out.println(ans);
   }
}