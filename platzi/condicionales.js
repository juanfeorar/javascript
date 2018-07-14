const starWars7 = 'Star Wars: El despertar de la fuerza';
const pgStarWars7 = 13;

const nameJuan = 'Juan';
const ageJuan = '37';

const nameSanti = 'Santi';
const ageSanti = '12';

function canWatchStarWars7(name, age, isWithAdult = false){
	if(age >= pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if(isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`);
	}else{
		alert(`${name} no puede pasar a ver ${starWars7}. 
			Tiene ${age} años y necesita tenet ${pgStarWars7}`);
	}
}
canWatchStarWars7(nameJuan, ageJuan);
canWatchStarWars7(nameSanti, ageSanti, true);
