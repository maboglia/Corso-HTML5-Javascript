function Studente (nome, cognome, year) {
	this.nome = nome;
	this.cognome = cognome;
	this.year = year;
	this.anni = 2017 - this.year;
	
	this.presentaStudente = function () {
		var stu = "Lo studente " + this.nome;
		stu += " " + this.cognome;
		stu += " ha circa " + this.anni;
		return stu;
	};

}


var studenti = [   
		new Studente ("bryan", "folleco", 1999),
		new Studente ("igli", "balliu", 1998),
		new Studente ("artur", "holobut", 1992),
		new Studente ("ludovica", "magnano", 1993),
		new Studente ("alexandru", "boaca", 1994),

		new Studente ("dario", "d'abbiero", 1990),
		new Studente ("giuseppe", "minniti", 1995),
		new Studente ("simone", "marzorati", 1997),
		new Studente ("danut", "andres", 1995),
		new Studente ("alberto", "tito", 1990),
		new Studente ("andrei", "tasca", 1991),

		new Studente ("cristiano", "maffeis", 1995),
		new Studente ("marco", "de palma", 1996),
		new Studente ("denilson", "vargas", 1992),
		new Studente ("daniele", "spada", 1988),
		new Studente ("fabio", "caccia", 1997),
		new Studente ("davide", "tacchino", 1995)
  ];

  for (var i = 0; i < studenti.length; i++) {
  	console.log(  studenti[i].presentaStudente()  );

  };