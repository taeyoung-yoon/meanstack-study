/*
 * GET 'About us' page
 */

module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

/*
 * GET 'Sign in' page
 */

module.exports.signin = function(req, res){
  res.render('index', { title: 'Sing in' });
};
