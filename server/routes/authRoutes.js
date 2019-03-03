const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile','email']
        })
    );
    
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook', { 
             scope : ['public_profile','email']
        })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/todo');
        }
    );
    
    // somehow successRedirect and failureRedirect is necessary. 
    app.get('/auth/facebook/callback', passport.authenticate('facebook', 
    { successRedirect: '/todo', failureRedirect: '/' }));
    
    app.get('/logout',(req, res) => {
        // delete cookie 
        req.logout();
        res.redirect('/');
    })
    
    app.get('/current_user', (req,res) => {
        res.send(req.user);    
    });
    
   
}