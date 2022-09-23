const { Given, When, Then } = require("@wdio/cucumber-framework");
let apiLink = null;

Given("I open webdriver.io site",async ()=>{
    await browser.url('https://webdriver.io')
})

When("The page is presented", async ()=>{
    this.apiLink = await browser.$('.navbar__item=API')
})

When("We cick on API link", async ()=>{
    this.apiLink.click()
})

//Then("We could see presentation text with {text} portion"
Then(/^We could see a text with "([^"]*)?" portion$/, async (text)=>{
    const tit1 = await browser.$('h1=Introduction')
    const tit1Text = await tit1.getText()
    expect(tit1Text).toEqual("Introduction")
    const pa1 = await browser.$('//div[@class="theme-doc-markdown markdown"]/p[1]')
    //await pa1.waitForDisplayed({ timeout: 4000 })
    const pa1Text = await pa1.getText()
    expect(pa1Text).toContain(text)
    await browser.saveScreenshot('./screenshot.png')
})

Then("The session is closed", async ()=>{
    await browser.deleteSession()
})
