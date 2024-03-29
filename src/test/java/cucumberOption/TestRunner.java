package cucumberOption;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.SnippetType;

@RunWith(Cucumber.class)

//@CucumberOptions(features = "src/test/java/features", monochrome = true, glue = { "stepDefinitions" })

@CucumberOptions(features = "src/test/java/features", glue = "stepDefinitions", monochrome = true, plugin = { "pretty",
		"html:target/cucumber-reports", "json:target/cucumber.json" }, snippets = SnippetType.CAMELCASE, tags = {
				"@LogInGuruBank,@CreateCustomer,@EditCustomer" })

//mvn -Dbrowser=chrome -Dversion=78.0.3904.70 -Durl=http://demo.guru99.com/v4/ test verify
//mvn -Dbrowser=firefox -Dversion=0.19.0 -Durl=http://demo.guru99.com/v4/ test verify

public class TestRunner {

}
