package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.LoginPage;
import com.BankGuruPage.RegisterPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LoginSteps extends CommonTestCase {
	
	WebDriver driver;
	LoginPage loginPage;
	RegisterPage registerPage;
	
	public LoginSteps () {
		driver = CommonTestCase.openBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		
	}
	@Given("^I navigate to Guru bank and click Here link$")
	public void i_navigate_to_Guru_bank_and_click_Here_link() throws Throwable {
		registerPage = loginPage.clickHereLink();
	  
	    
	}

	@When("^I log in system$")
	public void i_log_in_system() throws Throwable {
		loginPage.inputUserID(RegisterSteps.username);
		loginPage.inputPassword(RegisterSteps.password);
		loginPage.clickLogin();
		
	  
	}

	

}
