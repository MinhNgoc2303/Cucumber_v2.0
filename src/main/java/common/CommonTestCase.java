package common;

import java.io.BufferedReader;

import java.io.FileReader;
import java.util.Random;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.FirefoxDriverManager;

public class CommonTestCase {
	public static WebDriver driver;

	public static WebDriver openBrowser() {
//		String browser = "chrome";
//		String version= "77.0.3865.90";
//		String url ="http://demo.guru99.com/v4/";
		
		String browser = System.getProperty("browser");
		String version = System.getProperty("version");
		String url = System.getProperty("url");
		
		if (browser.equals("chrome")) {
			ChromeDriverManager.getInstance().version(version).setup();
			driver = new ChromeDriver();
		} else if (browser.equals("firefox")) {
			FirefoxDriverManager.getInstance().version(version).setup();
			driver = new FirefoxDriver();
		}
		driver.get(url);
		driver.manage().window().maximize();
		return driver;

	}
	
	   
	
	public static void closeBrowser() {
		driver.quit();
	}
	
	public String randomemail() {
		Random rand = new Random();
		int number = rand.nextInt(9000000);
		String numberString = Integer.toString(number);
		return numberString;

	}
	public void verifyTrue(Boolean condition) {
		Assert.assertTrue(condition);
	}
	public void verifyFalse(Boolean condition) {
		Assert.assertFalse(condition);
	}
	public void verifyEqual(String actual, String expected) {
		Assert.assertEquals(actual, expected);
	}
	
	public static String readFile(String filename) {
		String result = "";
		try {
			@SuppressWarnings("resource")
			BufferedReader br = new BufferedReader(new FileReader(filename));
			StringBuilder sb = new StringBuilder();
			String line = br.readLine();
			while (line != null) {
				sb.append(line);
				line = br.readLine();
				System.out.println("value " + line);

			}
			result = sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;

	}
	
	
	
	
	
	
}
