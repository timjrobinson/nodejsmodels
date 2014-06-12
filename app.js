User = require("./user.js")

var toby = new User({name: "Toby"});
console.log("Toby is: ", toby);
toby.save(function(err, savedToby) {
    console.log("Saved toby: ", savedToby);
});

User.findById(42, function (err, user) {
    user.changeName("Brian");
    console.log("Brian is: ", user);
    user.set("age", 6);
    console.log("Brian is now: ", user); //Brian has an age, because set is not sanitized
    user.save(function (err, user) {
        console.log("Brian after save: ", user); //Note the age has now gone as it wasn't in the schema
    });
});

