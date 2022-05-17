function enviar(){
swal({
  title: "Esta seguro de enviar?",
  text: "Asegurese que el archivo es el correcto",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Su archivo ha sido envaido correctamente", {
      icon: "success",
    });
  } else {
    swal("Ha cancelado el envio de su archivo");
  }
});
}

  function  cancelar(){
    swal( "Esta seguro?", {
      dangerMode: true,
      buttons: true,
});
}