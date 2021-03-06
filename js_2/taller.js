$(document).ready(function() {    
    $('#example').DataTable({        
        language: {
                "lengthMenu":"Mostrar MENU registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del START al END de un total de TOTAL registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de MAX registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":">",
                    "sPrevious": "<"
                 },
                 "sProcessing":"Procesando...",
            },
        //para usar los botones   
        responsive: "true",
        dom: 'Bfrtilp',       
        buttons:[ 
            {
                extend:    'excelHtml5',
                text:      '<i class="bi bi-file-earmark-spreadsheet"></i> ',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="bi bi-file-earmark-pdf"></i>',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger'
            },
            {
                extend:    'print',
                text:      '<i class="bi bi-printer"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-info'
            },
        ]           
    });     
});