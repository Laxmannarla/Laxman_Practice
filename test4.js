describe('Chain locators',function() {  


    it('Open Angular js website',function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    element(by.model("first")).sendKeys("7");
    element(by.model("second")).sendKeys("9");
    
    element(by.id("gobutton")).click();
    
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
    {
    
    console.log(text);
    })
    
    
 
    
    
    
    
    
    })
    
    })