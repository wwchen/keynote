md5=function(h){function i(c,d){return((c>>1)+(d>>1)<<1)+(c&1)+(d&1)}for(var m=[],l=0;64>l;)m[l]=0|4294967296*Math.abs(Math.sin(++l));return function(c){for(var d,g,f,a,j=[],c=unescape(encodeURI(c)),b=c.length,k=[d=1732584193,g=-271733879,~d,~g],e=0;e<=b;)j[e>>2]|=(c.charCodeAt(e)||128)<<8*(e++%4);j[c=(b+8>>6)*h+14]=8*b;for(e=0;e<c;e+=h){b=k;for(a=0;64>a;)b=[f=b[3],i(d=b[1],(f=i(i(b[0],[d&(g=b[2])|~d&f,f&d|~f&g,d^g^f,g^(d|~f)][b=a>>4]),i(m[a],j[[a,5*a+1,3*a+5,7*a][b]%h+e])))<<(b=[7,12,17,22,5,9,14,20,4,11,h,23,6,10,15,21][4*b+a++%4])|f>>>32-b),d,g];for(a=4;a;)k[--a]=i(k[a],b[a])}for(c="";32>a;)c+=(k[a>>3]>>4*(1^a++&7)&15).toString(h);return c}}(16);