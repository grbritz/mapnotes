var ref = new Firebase("https://sweltering-torch-5805.firebaseio.com");

authenticateUser(function(userAuthData) {
    console.log("User auth data", userAuthData);
});