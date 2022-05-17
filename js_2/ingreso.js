function validar() {
	var correo =document.getElementById("correo").value;
	var contrasena =document.getElementById("contrasena").value;

	if(correo.length < 1){
		alert("ingrese Correo")
		return false;
	}
	else{
		if (contrasena.length < 1) {
			alert("Ingrese Contaseña");
			return false;
		}
	}if (correo === "insumo@janos.com" && contrasena ==="12345"){
		swal({
			title: "¡Bienvenido Encargado!",
			icon: "success",
			buttons: true,
			dangerMode: true,
		})
		window.location="Dash/NuevodashInsumos.html";
	}
	else if (correo === "admi9@janos.com" && contrasena ==="43725"){
		swal({
			title: "¡Bienvenido Administrador!",
			icon: "success",
			buttons: true,
			dangerMode: true,
		})
		window.location="Dash/NuevodashInventario.html";
	}
	else{
		if (correo === "usuario@janos.com" && contrasena ==="2468"){
		swal({
			title: "¡Bienvenido!",
			icon: "success",
			buttons: true,
			dangerMode: true,
		})
		window.location="Dash/NuevodashUsuario.html";
		}

		else{
		alert("correo o contraseña Incorrecto");
		return false;
	}
	
}
}

	