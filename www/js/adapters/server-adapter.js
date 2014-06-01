app.adapters.parkings = (function () {

    var findById = function (id) {
        var deferred = $.Deferred();
        var parking = null;
        var l = parkingList.length;
        for (var i = 0; i < l; i++) {
            if (parkingList[i].id === id) {
                parking = parkingList[i];
                break;
            }
        }
        deferred.resolve(parking);
        return deferred.promise();
    };


    var parkingList = [
        {"id": 1, "name": "Сад Эрмитаж", coordinate: new LatLon(1, 2)}
    ];

    // The public API
    return {
        findById: findById
    };

}());