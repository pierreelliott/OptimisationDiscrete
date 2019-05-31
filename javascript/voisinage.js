exports.permute = (xi) => {
	 let permut = generePermutation(xi);
	 let newSolution = permuteElements(xi, permut[0], permut[1]);
	 return newSolution;
}

function generePermutation(xi) {
	 let alea1 = getRandomInt(xi.length);
	 let alea2;
	 do {
	 	  alea2 = getRandomInt(xi.length);
	 	} while (alea1 != alea2);
	 
	 return [alea1, alea2];
}

function permuteElements(xi, a, b) {
	 let newXi = Array.from(xi);
	 let equip1 = newXi[a];
	 newXi[a] = newXi[b];
	 newXi[b] = equip1;
	 return newXi;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
