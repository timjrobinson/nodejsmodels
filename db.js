var db = {
    get: function () {
        return this;
    }, 
    update: function(data) { 
        this.returnData = data; 
        return this;
    }, 
    run: function(callback) {
        callback(null, this.returnData || {})
    }
};

module.exports = db;
