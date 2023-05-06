const puppetter = require("puppeteer");

(async ()=>{
    const browser   = await puppetter.launch({headless:"new"});
    const page = await browser.newPage();
    await page.goto("https://bilibili.com")
    await page.screenshot({path:"example.png"})
    await browser.close();
})()
