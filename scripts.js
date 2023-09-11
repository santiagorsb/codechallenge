
document.getElementById('formRegis').addEventListener('submit', function(event){
    event.preventDefault();

const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const fechaNacimiento = document.getElementById('fechaNacimiento').value;

const infoForm = {
    nombre,
    apellido,
    fechaNacimiento
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(infoForm)
})
.then(response => response.json())
.then(data =>{
    console.log(data);
    })
    .catch(error=> console.error('Error:', error));
});