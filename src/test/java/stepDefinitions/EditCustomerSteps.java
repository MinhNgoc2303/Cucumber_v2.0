package stepDefinitions;

import org.openqa.selenium.Keys;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.EditCustomerPage;
import com.BankGuruPage.HomePage;
import com.BankGuruPage.NewCustomerPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
 

public class EditCustomerSteps extends CommonTestCase{
	
	WebDriver driver;
	HomePage homePage;
	NewCustomerPage newCustomer;
	EditCustomerPage editCustomer;
	
   public EditCustomerSteps() {
	driver = CommonTestCase.driver;
	homePage = PageFactory.initElements(driver, HomePage.class);
		
	}
	@Given("^I open Edit Customer page$")
	public void i_open_Edit_Customer_page()   {
	   editCustomer =homePage.clickEditCustomer();
		
	}

	@When("^I input key tab to customer id$")
	public void i_input_key_tab_to_customer_id()   {
		editCustomer.pressToCustomerId(Keys.TAB);
	     
	}

	@Then("^Verify successfully with message Edit Page \"([^\"]*)\"$")
	public void verify_successfully_with_message_Edit_Page(String message)  {
		verifyTrue(editCustomer.isDynamicElementDisplayed(message));
	}
	
	@When("^I input data \"([^\"]*)\" to customer id$")
	public void i_input_data_to_customer_id(String dataCustomId)   {
		editCustomer.inputToCustomerId(dataCustomId);
	     
	}

	@When("^I input customer id$")
	public void i_input_customer_id()   {
		editCustomer.inputToCustomerId(NewCustomerSteps.custmerId);
	    
	     
	}

	@When("^I click to submit button$")
	public void i_click_to_submit_button()   {
		editCustomer.clickSubmitEditCustomer();
	     
	}

	@When("^I update key tab to address$")
	public void i_update_key_tab_to_address()   {
		editCustomer.clearTextToAddressField();
		editCustomer.pressToAddressField(Keys.TAB);
	     
	}

	@When("^I update key tab to city$")
	public void i_update_key_tab_to_city()   {
		editCustomer.clearTextToCityField();
		editCustomer.pressToCityField(Keys.TAB);
	     
	}

	@When("^I update data \"([^\"]*)\" to city$")
	public void i_update_data_to_city(String dataCity)   {
		editCustomer.clearTextToCityField();
		editCustomer.inputToCityField(dataCity);
	    
	     
	}

	@When("^I update key tab to state$")
	public void i_update_key_tab_to_state()   {
		editCustomer.clearTextToStateField();
		editCustomer.pressToStateField(Keys.TAB);
	     
	}

	@When("^I update data \"([^\"]*)\" to state$")
	public void i_update_data_to_state(String dataState)   {
		editCustomer.clearTextToStateField();
		editCustomer.inputToStateField(dataState);
	     
	}

	@When("^I update data \"([^\"]*)\" to pin$")
	public void i_update_data_to_pin(String dataPIN)   {
		editCustomer.clearTextToPINField();
		editCustomer.inputToPINField(dataPIN);
	     
	}

	@When("^I update key tab to pin$")
	public void i_update_key_tab_to_pin()   {
		editCustomer.clearTextToPINField();
		editCustomer.pressToPINField(Keys.TAB);
	}

	@When("^I update key tab to phone$")
	public void i_update_key_tab_to_phone()   {
		editCustomer.clearTextToTelephoneField();
		editCustomer.pressToTelephoneField(Keys.TAB);
	     
	}

	@When("^I update data \"([^\"]*)\" to phone$")
	public void i_update_data_to_phone(String dataTelephone)   {
		editCustomer.clearTextToTelephoneField();
		editCustomer.inputToTelephoneField(dataTelephone);
	     
	}

	@When("^I update key tab to email$")
	public void i_update_key_tab_to_email()   {
		editCustomer.clearTextToEmailField();
		editCustomer.pressToEmailField(Keys.TAB);
	     
	}

	@When("^I update data \"([^\"]*)\" to email$")
	public void i_update_data_to_email(String dataEmail)   {
		editCustomer.clearTextToEmailField();
		editCustomer.inputToEmailField(dataEmail);
	     
	}

	@When("^I update key space to email$")
	public void i_update_key_space_to_email()   {
		editCustomer.clearTextToEmailField();
		editCustomer.pressToEmailField(Keys.SPACE);

	     
	}
	@Then("^Close browser$")
	public void quitBrowser() {
		CommonTestCase.closeBrowser();
	}




}
