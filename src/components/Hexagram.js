const axios = require('axios');
import * as React from 'react';

const convertLine = (lineCalculation) => {
  let oldYang = '<div class="line old-yang"><div>';        // --- o --- changing
	let oldYin = '<div class="line old-yin"><div>';          // --- x --- changing
	let youngYang = '<div class="line young-yang"><div>';    // ---------
	let youngYin = '<div class="line young-yin"><div>';      // ---   ---

	switch (lineCalculation) {
		case 9: 
      return oldYang;
		case 6:
			return oldYin
		case 7:
			return youngYang
		case 8:
			return youngYin
  default:
    console.log(`Sorry, please consult the oracle again.`);
}

}

const getLine = (stalks) => {
  const {data} = await axios.get(`https://www.random.org/integers/?num=5&min=4&max=${stalks - 4}&col=1&base=10&format=plain&rnd=new`);

	let right = data
	right -= 1
	const pinkyFinger = 1
	
	let left = stalks - random;
	
	while (left >= 4) {
			left -= 4
	}
	
	const ringFinger = left
	
	while (right >= 4) {
			right -= 4
	}
	
	const middleFinger = right
	const calculation = pinkyFinger + ringFinger + middleFinger
	
	return convertLine(calculation)
}

const Hexagram = () => {
	return (
		<>
		{getLine}
		</>
	)
}

export default Hexagram
