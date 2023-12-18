// Hàm xử lý submit form login
$("#loginForm").submit(function(event) {

  // Ngăn chặn submit mặc định
  event.preventDefault();

  // Lấy dữ liệu người dùng nhập
  var username = $("#username").val(); 
  var password = $("#password").val();

  // Kiểm tra dữ liệu hợp lệ
  if(username && password) {

    // Kiểm tra quyền người dùng
    if(username == "host" && password == "1234") {
    
      // Chuyển trang nếu là chủ trọ  
      window.location.href = "/host.html";

    } else if(username == "tenant" && password == "1234") {

      // Chuyển trang nếu là người thuê
      window.location.href = "tenants.html";

    } else {
      // Hiển thị thông báo lỗi nếu tên đăng nhập không hợp lệ
      alert("Invalid username"); 
    }

  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  
});