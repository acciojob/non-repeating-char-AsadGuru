function firstNonRepeatedChar(str) {
 // Write your code here

	// create an object to count occurences of each character 

	const charCount = {};

	// first pass: count the occurences of each charater
	for(let char of str) {
		if (charCount[char]++) {
		} else {
			charCount[char] = 1
		}
	}

	/ second seizee firl
	for(let char of str) {
		if(charCount[char] === 1) {
			return char
		}
	}

	// if no unique character is found, return null
	return null
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
