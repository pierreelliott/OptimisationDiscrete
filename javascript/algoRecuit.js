/**
	voisin : fonction de voisinage
	fObj : fonction objectif
	x0 : solution initiale
	t0 : température initiale
	n1 : nombre de changement de température
	n2 : nombre de mouvements à la température tk
	mu : baisse de température ( < 1)
	*/
exports.algo = function algoRecuit(voisin, fObj, x0, params) { // NOTE : On cherche le minimum !
  var xmin = x0,
  fmin = fObj(x0),
  tk = params.temperature, // La température actuelle
  xi = x0, // La solution courante
  i = 0,
  n1 = params.tempChange,
  n2 = params.step
  mu = params.mu;

  for(let k = 0; k < n1; k++) {
  	 for(let l = 1; l < n2; l++) {
  	 	  let fXi = fObj(xi);
  	 	  let y = voisin(xi); // TODO Choisir aléatoirement un voisin
  	 	  let fVoisin = fObj(y);
  	 	  let deltaF = fVoisin - fXi;
  	 	  if(deltaF <= 0) {
  	 	  	 xi = y;
  	 	  	 if(fVoisin < fmin) {
  	 	  	 	  xmin = xi;
  	 	  	 	  fmin = fVoisin;
  	 	  	 	}
  	 	  } else {
  	 	  	 let p = Math.random();
  	 	  	 let expo = Math.exp((-1*deltaF)/tk);
  	 	  	 if(p <= expo) {
  	 	  	 	  xi = y
  	 	  	 	}
  	 	  }
  	 }
  	 tk = mu * tk;
  }

  return xmin;
}
