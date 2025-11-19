function agregarPersona() {
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const tablaRegistros = document.getElementById("tabla-registros");

    const msgError = document.querySelector(".msg-error");
    const msgExito = document.querySelector(".msg-exito");

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();

    msgError.textContent = "";
    msgExito.textContent = "";
    msgError.style.display = "none";
    msgExito.style.display = "none";

    if (nombre === "" || apellido === "") {
        msgError.textContent = "Debe completar todos los campos.";
        msgError.style.color = "red";
        msgError.style.display = "block";
        return;
    }

    const fila = document.createElement("tr");

    const colNombre = document.createElement("td");
    colNombre.textContent = nombre;

    const colApellido = document.createElement("td");
    colApellido.textContent = apellido;

    fila.appendChild(colNombre);
    fila.appendChild(colApellido);

    tablaRegistros.appendChild(fila);

    msgExito.textContent = "Registro agregado correctamente.";
    msgExito.style.color = "green";
    msgExito.style.display = "block";

    nombreInput.value = "";
    apellidoInput.value = "";
}
