/*
 * GET 'About us' page
 */

module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
};

/*
 * GET 'Sign in' page
 */

module.exports.signin = function(req, res){
  res.render('signin-index', { title: 'Sing in' });
};
