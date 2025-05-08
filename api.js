
const buscarUsuario = () => {
    const userId = document.getElementById("userIdInput").value;

    if (!userId) {
        document.getElementById("userData").innerHTML = "Por favor ingresa un ID.";
        return;
    }

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    
    axios.get(url)
        .then(response => {
            const user = response.data;
            mostrarDatos(user);
            document.getElementById("userIdInput").value = "";

        })
        .catch(error => {
            console.log(error);
            document.getElementById("userData").innerHTML = "Usuario no encontrado.";
        });
}


const mostrarDatos = (user) => {
    const userDataDiv = document.getElementById("userData");

    userDataDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p>Usuario: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Dirección: ${user.address.street}, ${user.address.city}</p>
        <p>Teléfono: ${user.phone}</p>
        <p>Sitio web: ${user.website}</p>
        <p>Compañía: ${user.company.name}</p>
    `;
}

document.getElementById("buscarBtn").addEventListener("click", buscarUsuario);


