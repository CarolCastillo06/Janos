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
  title: "Esta seguro que desear enviar",
  text: "Asegurese que sea el asunto correcto",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Su asunto a sido enviado correctamente", {
      icon: "success",
    });
  } else {
    swal("Asunto cancelado correctamente");
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
function siguiente(){
swal({
  title: "Esta seguro que desea continuar",
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