window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", window.scrollY > 60);
});
// th1: bỏ trống tk mk
// th2: bỏ trống tk điền mk
// th3: điền tk bỏ trống mk
function kiemtra() {
    var user = document.getElementById("tk");
    var pass = document.getElementById("mk");

    if (user.value.length == 0 && pass.value.length == 0) {
        alert("Vui lòng nhập email đăng nhập và mật khẩu !");
    } else if (user.value.length != 0 && pass.value.length == 0) {
        alert("Vui lòng nhập mật khẩu !");
    } else if (user.value.length == 0 && pass.value.length != 0) {
        alert("Vui lòng nhập email đăng nhâp !");
    } else {
        alert("Đăng nhập thành công !");
    }
}