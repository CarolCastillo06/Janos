function ingresar(){
swal({
  title: "Verifique su Contraseña",
  text: "Asegurese que la contraseña sea correcta",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Ingreso exitoso", {
      icon: "success",
    });
  } else {
    swal("Contraseña incorrecta");
  }
});
}
function enviar(){
swal({
  title: "Nos pondremos en contacto con usted",
  text: "Desea continuar",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Recibira un correo con la información solicitada", {
      icon: "success",
    });
  } else {
    swal("Usted ha cancelado este formulario Intente de nuevo");
  }
});
}
function Modificar(){
swal({
  title: "Esta seguro que desear Modificar",
  text: "Asegurese que todos los campos esten llenos",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Modificado Correctamente", {
      icon: "success",
    });
  } else {
    swal("Modificacion Cancelada");
  }
});
}
function buscar(){
swal({
  title: "Desea continuar",
  text: "Verifique que los datos estén correctamente ",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Adelante", {
      icon: "success",
    });
  } else {
    swal("Cancelar");
  }
});
}
function crearInsumo(){
swal({
  title: "Verifique que los datos sean correctos",
  text: "Continuar",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Insumo Creado", {
      icon: "success",
    });
  } else {
    swal("Ingrese los datos correctamente");
  }
});
}
function crearProceso(){
swal({
  title: "Desea continuar",
  text: "Verifique que los datos sean correctos",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Nuevo proceso de recupración creado con éxito", {
      icon: "success",
    });
  } else {
    swal("Cancelar");
  }
});
}
function registrarse(){
swal({
  title: "Desea continuar",
  text: "Verifique que los datos sean correctos",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Registro exitoso", {
      icon: "success",
    });
  } else {
    swal("No se realizo el registr");
  }
});
}

function siguiente(){
swal({
  title: "Desea continuar",
  text: "Verifique que los datos sean correctos",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Registro exitoso", {
      icon: "success",
    });
  } else {
    swal("Consulta Exitosa");
  }
});
}