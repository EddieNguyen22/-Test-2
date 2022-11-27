function sum(s1, s2) {
  let a = s1.split("");
  let b = s2.split("");
  let sumS = "";
  for(let i = 0; i < a.length && i < b.length; i++) {
   if(i < a.length)  
     sumS = sumS + a[i];
   if(i < b.length)  
     sumS = sumS + b[i];
  }
return sumS;

}
console.log(sum('abc','def'));

