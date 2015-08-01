function authenticateUser(cb) {
    var authData = ref.getAuth();
    if (!authData) {
        ref.authWithOAuthPopup("facebook", function(err, data) {
            if (error) {
                if (error.code === "TRANSPORT_UNAVAILABLE") {
                  // fall-back to browser redirects, and pick up the session
                  // automatically when we come back to the origin page
                    ref.authWithOAuthRedirect("facebook", function(error, authData) {
                        if (!error) {
                            console.debug("authenticated user", authData);
                            cb(authData);
                        }
                    });
                }
            } else if (authData) {
                console.debug("authenticated user", authData);
                cb(authData);
            }
        });
    }
    else {
        cb(authData);
    }
}

