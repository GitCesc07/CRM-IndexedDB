(function () {
    let DB;

    document.addEventListener("DOMContentLoaded", () => {

        conectarDB();

        // verificar el ID de la Url
        const parametrosUrl = new URLSearchParams(window.location.search);

        const idCliente = parametrosUrl.get("id");
        if(idCliente) {
            obtenerCliente(idCliente);
        }
    });

    function obtenerCliente(id) {
        const transaction = DB.transaction(["crm"], "readwrite");
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open("crm", 1);

        abrirConexion.onerror = function() {
            console.log("Hubo un error");
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        };
    }
})();