// get varible 
 let loginPwdStatus = false;
// function changePwdview
function changePwdview() {
  let   getLoginInput = $("#loginPwd");
    // check true
    if(loginPwdStatus === false) {
        getLoginInput.attr("type", "text");
        loginPwdStatus = true;
        // loginPwdStatus == true
    }else if (loginPwdStatus=== true) {
        getLoginInput.attr("type", "password");
        loginPwdStatus = true;

    }
}