var orm = require("../config/orm.js");

var burger = {

    all:function(cb) {
        orm.selectAllBurgers(function(res){
            cb(res);
        })
    },
    create: function(Burger_Name, cb){
        orm.insertBurger(Burger_Name, function(res){
            cb(res);
        });
    },
    update : function (New_Burger, id, cb) {
        orm.updateBurger(New_Burger, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;