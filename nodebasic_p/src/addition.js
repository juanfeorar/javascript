module.exports = {
    //Versión sincrona
    //****************
    syncSum: function (a, b) {
        console.log(a + b);
    },
    asyncSum: function (a, b) {
        setTimeout(() => {
            console.log(a + b);

        }, 5000);
    }
}