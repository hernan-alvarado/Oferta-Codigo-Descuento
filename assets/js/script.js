function obtenerCodigo() {
	const checkbox = document.getElementById("check");
	const codigo = document.getElementById("codigo");
	if (!checkbox.checked) {
		alert(
			"Para obtener el código de descuento, debe aceptar los términos y condiciones"
		);
	} else {
		codigo.classList.remove("invisible");
	}
}

let idCodigo = document.getElementById("codigo");
idCodigo.innerHTML = "RXTY60";
