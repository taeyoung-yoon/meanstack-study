/*
 * GET 'About us' page
 */

module.exports.about = function(req, res){
  res.render('generic-text', { 
    title: 'About',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.\n\n MEAN stack 테스트용 페이지 입니다.'
  });
};

/*
 * GET 'Sign in' page
 */

module.exports.signin = function(req, res){
  res.render('signin-index', { title: 'Sing in' });
};
