// Complete the superReducedString function below.
function superReducedString(s) {
	var res;
	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === s.charAt(i+1)) {
			res = s.slice(i, i + 1);
		}
		console.log(res);
	}
	if(res===2){
		return 'Empty String';
	}
	return res;
}

superReducedString("aaabccddd");//abd
// superReducedString("a") ;       //Empty String
// superReducedString("baab") ;    //Empty String



