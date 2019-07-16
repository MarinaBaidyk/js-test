function getChars(n = 1) {
	if (n > 0 && (n % 1) === 0 && typeof n == 'number') {
		return "x".repeat(n);
	}
	else {
		return false
	}
}

console.log( 'без параметров', getChars() );
console.log( 'передана строка', getChars('3' ) );
console.log( 'передана дробь', getChars(2.7 ) );
console.log( 'передано отрицательное число', getChars(-3 ) );
console.log( 'передано 1', getChars(1 ) );
console.log( 'передано 3', getChars(3 ) );
console.log( 'передано 7', getChars(7 ) );
