$("#loginForm").submit(function(event) {
  event.preventDefault();

  var username = $("#username").val(); 
  var password = $("#password").val();

  if(username && password) {

      if(username == "host" && password == "1234") {
      window.location.href = "host.html";
  
    } else if(username == "hvc123" && password == "1234") { 
      window.location.href = "tenant.html?id=hvc123";
    
    } else if(username == "bxs345" && password == "1234") {
      window.location.href = "tenant.html?id=bxs345";
  
    } else if(username == "newuser" && password == "1234") {
          
      var userType = prompt("Bạn là (1 - chủ trọ | 2 - khách thuê): ", "");
      
      if(userType == "1") {
        window.location.href = "submit.html";
  
      } else if(userType == "2") {
        window.location.href = "tenant.html"; 
      }
  
    } else {
      alert("Sai tài khoản hoặc mật khẩu!"); 
    }
  }
});