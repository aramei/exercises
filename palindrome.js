function palindrome(str) {
	var regExp = /[\W+ _]/g;
	var newStr = str.replace(regExp, "").toLowerCase();
	return newStr == newStr.spli("").reverse().join('');
}

palindrome("red");