const looLimit = 1e9;

module.exports = {
    simulateSync: function () {
        console.log('Comenzando bloqu simulado...');
        for (let i = 0; i <= looLimit; i += 1) {
            /* Simulación para operación intensiva
            - Cifrado
            - Comprensión
            - Proceso de datos
            - Petición HTTP
            - Query a base de datos
             */
            if (i == looLimit) console.log('He llegado al final!');
        }
        console.log("El bucle ha finalizado!");
    },
    simulateAsync: function () {
        console.log('Comenzando bloqueo simulado....');
        setImmediate(() => {
            for (let i = 0; i <= looLimit; i += 1) {
                /* Simulación para operación intensiva
                - Cifrado
                - Comprensión
                - Proceso de datos
                - Petición HTTP
                - Query a base de datos
                 */
                if (i == looLimit) console.log('He llegado al final!');
            }
        });
        console.log("El bucle ha finalizado!");

    }
}