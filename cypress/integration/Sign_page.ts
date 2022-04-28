import{loginpage}from "../PageObjectModal/login"

let Loginpage = new loginpage()

it( "Login Lawyer Wangu site", function() {
   
   Loginpage.navigate('https://staging.lawyerwangu.com/')
   Loginpage.loginbutton()
   Loginpage.EnterUserName("lwtesterindi@gmail.com")
   Loginpage.EnterPassword('tester@123')
   Loginpage.ClickLogin()

    

    
})