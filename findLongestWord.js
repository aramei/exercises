function findLongestWord(str) {
	var split = str.split(' ').sort(function (a, b) {
		return b.length - a.length;
	});
	return split[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");