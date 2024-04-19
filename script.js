function firstChar(text) {
  // your code here
	const str = text.trim();
	if(str[0] !== ''){
		return str[0];
	}else {
		return '';
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
