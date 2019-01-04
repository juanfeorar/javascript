const URL_API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//$.get(`${URL_API}${PEOPLE_URL.replace(':id',1)}`, {crossDomain})

const onPeople = `${URL_API}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

$.get(onPeople, opts, function (data) {
    console.log(`Hola yo soy ${data.name}`);
    console.log(arguments);
    
    
});