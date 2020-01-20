function isPalindrome(x) {
	var result = String(x.toLowerCase()) === String(x.toLowerCase().split('').reverse().join('')) ? true : false;

  return result;
}