function makeBuffer() {
	var string = '';
	function buffer(value) {
		if (arguments.length == 0) {
			return string;
		}
		string += value;
	}
	buffer.clear = function() {
		return string = '';
	}
	return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!