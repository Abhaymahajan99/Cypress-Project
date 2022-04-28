export class loginpage{

    LoginPage_Url = 'https://staging.lawyerwangu.com/'
    LoginPage_Loginbutton='Log in'
    LoginPage_UserName ='#email'
    LoginPage_Password ='#con_password'
    LoginPage_Click = 'Sign in'


    navigate(url: string){
     cy.visit(url)
    }

    loginbutton(){
    cy.contains(this.LoginPage_Loginbutton).click({force: true})
    }

    EnterUserName(username: string){
    cy.get(this.LoginPage_UserName,{timeout:5000}).type(username)
    }

    EnterPassword(password: string){
    cy.get(this.LoginPage_Password).type(password)
    }

    ClickLogin(){

    cy.contains(this.LoginPage_Click,{timeout:5000}).click()
    }

}