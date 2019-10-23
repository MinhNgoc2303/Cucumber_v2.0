package com.BankGuruPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuru.UI.RegisterPageUI;

import common.CommonFunctions;

public class RegisterPage extends CommonFunctions {

	public RegisterPage(WebDriver driver) {
		super(driver);
	}
	public void inputEmail(String value) {
		waitForElementVisible(RegisterPageUI.EMAIL_TXT);
		inputElement(RegisterPageUI.EMAIL_TXT, value);
	}
	public void clickRegister() {
		waitForElementVisible(RegisterPageUI.SUBMIT_BTN);
		clickToElement(RegisterPageUI.SUBMIT_BTN);
	}

	public String getUserName() {
		waitForElementVisible(RegisterPageUI.USERNAME_LBL);
		return getTextElement(RegisterPageUI.USERNAME_LBL);
	}
	
	public String getPassword() {
		waitForElementVisible(RegisterPageUI.PASSWORD_LBL);
		return getTextElement(RegisterPageUI.PASSWORD_LBL);
	}
	public LoginPage openLogInBankGuru(String url) {
		navigateToUrl(url);
		return PageFactory.initElements(driver,LoginPage.class);
	}
}