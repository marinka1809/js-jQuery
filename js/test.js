 function Triangle(n) {
 var line="#";
 while ( line.length<=n) {
 console.log (line);
 line+= "#";
 }
 }

 function FizzBuzz (n) {
 for (var i=1; i<=n; i+=1){
 if((i%3==0)&&(i%5==0) ) {
 console.log("FizzBuzz")
 }
 else if (i%3==0){
 console.log("Fizz")
 }
 else if(i%5==0){
 console.log("Buzz")
 }
 else {
 console.log(i)
 }
 }
 }

 function  ChessBoard (n, p, s1, s2) {
 var line_odd=s1;
 var line=s2;
 for (var i=2; i<=n; i+=1){
 if (i%2==0) {
 line_odd+=s2;
 }
 else {
 line_odd+=s1;
 }
 if (i%2==0) {
 line+=s1;
 }
 else {
 line+=s2;
 }
 }
 for (var i=1; i<=p; i+=1){

 if (i%2==0) {
 console.log (line);
 }
 else {
 console.log (line_odd);
 }
 }
 }

 function isEven (n) {
 var is_even;
 if (n==0) {
 is_even = true;
 return is_even;
 }
 else if (n==1) {
 is_even = false;
 return is_even;
 }
 else if (n>1) {
 return isEven (n-2);
 }
 else if (n<0) {
 return isEven (n+2);
 }
 }

 function countBs (line_b) {
 for (var i=0; line_b.charAt(i)!=""; i+=1){}
 return i;
 }

 function countChar (line_b, char) {
 var count_char;
 for (var i=0; line_b.charAt(i)!=""; i+=1){
 if (line_b.charAt(i)==char) {
 return i+1;
 break;
 }
 }
 return "Cимвол ненайден";
 }
 Triangle(7);
 FizzBuzz(100);
 ChessBoard (8, 4, "#", "%");
 console.log ( isEven (-76));
 console.log ( countBs("sdsftg"));
 console.log ( countChar("sdsftg", "d"));