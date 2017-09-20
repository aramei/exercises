function titleCase(str) {
	var newStr = str.split(' ');
	var newArray = [];
	for (var i = 0; i < newStr.length; i++) {
		result = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1).toLowerCase();
		newArray.push(result);
	}
	return newArray.join(" ");
}