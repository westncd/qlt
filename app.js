  $('#login').submit(function(e) {

    e.preventDefault();

    let username = $('#username').val(); 
    let password = $('#password').val();

    if(username == 'admin' && password == '1234') {
      window.location.href = 'home.html';
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }

  });

