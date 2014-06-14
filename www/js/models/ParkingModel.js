app.models.Employee = Backbone.Model.extend({

    initialize:function () {

    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.employee.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.EmployeeCollection = Backbone.Collection.extend({

    model: app.models.Employee,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.employee.readAll().done(function (data) {
                options.success(data);
            });
        }
    }

});