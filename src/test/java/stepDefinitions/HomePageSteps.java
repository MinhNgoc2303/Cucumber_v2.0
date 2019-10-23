package stepDefinitions;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.HomePage;

import common.CommonTestCase;
import cucumber.api.java.en.Then;


public class HomePageSteps extends CommonTestCase  {
	WebDriver driver;
	HomePage homePage;
	
	public HomePageSteps() {
		driver = CommonTestCase.driver;
		homePage = PageFactory.initElements(driver, HomePage.class);

	}
	
	@Then("^Verify successfully with message Home Page \"([^\"]*)\"$")
	public void verify_successfully_with_message(String message) throws Throwable {
		String welcomeMsg = homePage.verifyHomePage();
		verifyTrue(welcomeMsg.contains(message));
	  
	}
	

}
