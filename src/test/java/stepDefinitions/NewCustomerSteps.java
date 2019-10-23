package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.HomePage;
import com.BankGuruPage.NewCustomerPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewCustomerSteps extends CommonTestCase{
	
	WebDriver driver;
	HomePage homePage;
	NewCustomerPage newCustomer;
	public static String custmerId;
	
	public NewCustomerSteps() {
		driver = CommonTestCase.driver;
		homePage = PageFactory.initElements(driver, HomePage.class);
		
	}
	//tc01
	@Given("^I open New Customer page$")
	public void i_open_New_Customer_page()     {
		newCustomer = homePage.clickNewCustomer();
		
	}

	@When("^I input key tab to customer name$")
	public void i_input_key_tab_to_customer_name()     {
		newCustomer.pressKeysToCustomerName(Keys.TAB);
	}

	//tc0203
	@When("^I input data \"([^\"]*)\" to customer name$")
	public void i_input_data_to_customer_name(String customerName01)     {
		newCustomer.inputCustomerName(customerName01);
	}
	
	@Then("^Verify successfully with message \"([^\"]*)\"$")
	public void verify_successfully_with_message(String message)     {
		verifyTrue(newCustomer.isDynamicElementDisplayed(message));
	}

	
	//tc04
	@When("^I input key space to customer name$")
	public void i_input_key_space_to_customer_name()     {
		newCustomer.inputCustomerName(" ");
	}
	
	//TC05
	@When("^I input key tab to address$")
	public void i_input_key_tab_to_address()     {
		newCustomer.pressKeyToAddress(Keys.TAB);
	   
	}
	//tc06
	@When("^I input key space to address$")
	public void i_input_key_space_to_address()     {
		newCustomer.inputAddress(" ");
	}
	//tc07
	@When("^I input key tab to city$")
	public void i_input_key_tab_to_city()     {
		newCustomer.pressKeyToCityField(Keys.TAB);
	}
	
	//tc0809
	@When("^I input data \"([^\"]*)\" to city$")
	public void i_input_data_to_city(String city)     {
		newCustomer.inputCityField(city);
	     
	}
	//tc10
	@When("^I input key space to city$")
	public void i_input_key_space_to_city()     {
		newCustomer.inputCityField(" ");
	     
	}
	//tc11
	@When("^I input key tab to state$")
	public void i_input_key_tab_to_state()     {
		newCustomer.pressKeyToStateField(Keys.TAB);
	     
	}
	//tc1213
	@When("^I input data \"([^\"]*)\" to state$")
	public void i_input_data_to_state(String state)     {
		newCustomer.inputStateField(state);
	     
	}
	
	//tc14
	@When("^I input key space to state$")
	public void i_input_key_space_to_state()     {
		newCustomer.inputStateField(" ");
	     
	}
	//tc15
	@When("^I input data \"([^\"]*)\" to pin$")
	public void i_input_data_to_pin(String PIN)     {
		newCustomer.inputPINField(PIN);
	     
	}

	@When("^I input key tab to pin$")
	public void i_input_key_tab_to_pin()     {
		newCustomer.pressKeyToPINField(Keys.TAB);
	     
	}

	@When("^I input key space to pin$")
	public void i_input_key_space_to_pin()     {
		newCustomer.inputPINField(" ");
	     
	}

	@When("^I input key tab to phone$")
	public void i_input_key_tab_to_phone()     {
		newCustomer.pressKeyToTelephoneField(Keys.TAB);
	     
	}

	@When("^I input key space to phone$")
	public void i_input_key_space_to_phone()     {
		newCustomer.inputTelephoneField(" ");
	     
	}

	@When("^I input data \"([^\"]*)\" to phone$")
	public void i_input_data_to_phone(String phone)     {
		newCustomer.inputTelephoneField(phone);
	     
	}

	@When("^I input key tab to email$")
	public void i_input_key_tab_to_email()     {
		newCustomer.pressKeyToEmailField(Keys.TAB);
	     
	}

	@When("^I input data \"([^\"]*)\" to email$")
	public void i_input_data_to_email(String email)     {
		newCustomer.inputEmailField(email);
	     
	}

	@When("^I input key space to email$")
	public void i_input_key_space_to_email()     {
	     
		newCustomer.inputEmailField(" ");
	}

	@When("^I input with data \"([^\"]*)\" to customer name$")
	public void i_input_with_data_to_customer_name(String name)     {
		newCustomer.inputCustomerName(name);
	     
	}

	@When("^I input with data \"([^\"]*)\" to date of birth$")
	public void i_input_with_data_to_date_of_birth(String DOB)     {
		newCustomer.inputDateOfBirth(DOB);
	     
	}

	@When("^I input with data \"([^\"]*)\" to address$")
	public void i_input_with_data_to_address(String address)     {
		newCustomer.inputAddress(address);
	     
	}

	@When("^I input with data \"([^\"]*)\" to city$")
	public void i_input_with_data_to_city(String city)     {
		newCustomer.inputCityField(city);
	     
	}

	@When("^I input with data \"([^\"]*)\" to state$")
	public void i_input_with_data_to_state(String state)     {
		newCustomer.inputStateField(state);
	     
	}

	@When("^I input with data \"([^\"]*)\" to pin$")
	public void i_input_with_data_to_pin(String pin)     {
		newCustomer.inputPINField(pin);
	     
	}

	@When("^I input with data \"([^\"]*)\" to phone$")
	public void i_input_with_data_to_phone(String mobile)     {
		newCustomer.inputTelephoneField(mobile);
	     
	}

	@When("^I input with data \"([^\"]*)\" to email$")
	public void i_input_with_data_to_email(String emailCustmer)     {
		newCustomer.inputEmailField(emailCustmer + randomemail() + "@gmail.com");
	     
	}

	@When("^I input with data \"([^\"]*)\" to password$")
	public void i_input_with_data_to_password(String password)     {
		newCustomer.inputPasswordNewCustomer(password);
	     
	}

	@When("^I click submit button$")
	public void i_click_submit_button()     {
		newCustomer.clickSubmitNewCustomer();
	     
	}

	@Then("^I get text UserID$")
	public void i_get_text_UserID()     {
		custmerId = newCustomer.getCustomerId();
	     
	}

	
}
