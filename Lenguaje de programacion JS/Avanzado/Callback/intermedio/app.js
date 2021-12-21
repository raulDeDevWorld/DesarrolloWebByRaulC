/*//Un callback es una funcion que se ejecuta atraves de una funcion
const getUser = (id, cb)=>{
	const user = {
		name: 'Raul',
		id
	}
	if (id===2) cb('User not exist')
	else cb(null, user)
}

getUser(1, 
//funcion callback
	(err,user)=>{
	if (err) return console.log(err);
	console.log(`User name is ${user.name}`);
})
*/



const users = [
{
	id: 1,
	name: 'Dorian'
},
{
	id: 2,
	name: 'Laura'
},
{
	id: 3,
	name: 'Dorian'
},
]

const email = [
{
	id:1,
	email: 'Dorian@gmail.com'
},
{
	id:2,
	email: 'laura@gmail.com'
},
]

const getUser = (id, cb) => {
//recoremos el array para encontrar un usuario en especifico
	const user = users.find(user => user.id ===id)
	console.log(user);
}

getUser(2)