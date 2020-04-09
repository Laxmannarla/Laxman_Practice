describe('Protractor Element Demo',function() {  
    function Add(x,y)
    {
    element(by.model("first")).sendKeys(x);
    element(by.model("second")).sendKeys(y);
    
    element(by.id("gobutton")).click();
    
    }
    
    it('Locators',function() {
    
    
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    
    Add(10,3);
    Add(4,3);
    Add(2,7);
    Add(9,4);
    Add(19,3);
    
    element.all(by.repeater("result in memory")).each(function(item)
    {
    item.element(by.css("td:nth-child(3)")).getText().then(function(text)
    {
    
    console.log(text);
    })
    
    })
    
    })
    
    
    })