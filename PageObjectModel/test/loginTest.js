import { Selector } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import XPathSelector from '../../xpathSelector';


fixture`CammsAssesmentAnswer`
    .page`https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.logninToSite("performance_glitch_user", "secret_sauce");
    });


//Create random string firstname 
const firstname = Math.random().toString(36).substring(2,7);

//Create random string Lastname 
const lastname = Math.random().toString(36).substring(2,7);

//Create random string Postal code 
const postalcode = Math.random().toString(36).slice(2,7);

const pageHeader = XPathSelector('//span[text()="Products"]');
const productprice = XPathSelector('//div[text()="Sauce Labs Fleece Jacket"]/../../following::div[text()="49.99"]');
const product1 = XPathSelector('//div[@class="cart_item"]//child::div[text()="Sauce Labs Fleece Jacket"]');
const product2 = XPathSelector('//div[@class="cart_item"]//child::div[text()="Sauce Labs Bike Light"]');


test('Camms_Test_Cafe_Assesment_Answer', async t => {
    await t

        //Verify The Nevigated Page Header
        .expect((pageHeader).innerText).eql('Products')

        //Verify The Price of Product Sauce Labs Fleece Jacket  
        .expect((productprice).innerText).eql('$49.99')

        //Click Two Products to The Cart
        .click('#add-to-cart-sauce-labs-fleece-jacket')
        .click('#add-to-cart-sauce-labs-bike-light')

        //Click Shopping Cart Icon
        .click('#shopping_cart_container')

        //Verify that Selected Products In The Cart
        .expect((product1).innerText).eql('Sauce Labs Fleece Jacket')
        .expect((product2).innerText).eql('Sauce Labs Bike Light')

        //Click Checkout Button
        .click('#checkout')

        //Enter First Name
        .typeText('#first-name', firstname)

        //Enter Last Name
        .typeText('#last-name', lastname)

        //Enter Postal Code
        .typeText('#postal-code', postalcode)

        //Click Continue Button
        .click('#continue')

        //Click Finish Button
        .click('#finish');

});