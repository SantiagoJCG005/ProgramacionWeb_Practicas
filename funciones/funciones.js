function fibonacci(numTermino){
	const term1 = 1
	const term2 = 2
	if(numTermino ==1)
		return "1"
	else
		if(numTermino == 2)
			return "1,1"
		else {
			let cad ="1,1";
			let termActual = term2;
			let termAnterior = 1;
			let termAuxiliar = termActual;
			for (let term =3; term <= numTermino; term++) {

				termAuxiliar = termActual;
				termActual = termActual + termAnterior,
				termAnterior = termAuxiliar
				cadfibonacci +=","+ termActual;
			}
			return cadfibonacci;
		}

}
