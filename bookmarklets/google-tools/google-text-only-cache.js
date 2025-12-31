/**
 * Google - Text-Only Cache
 * 
 * Category: SERP Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function()%7Bvar%20loc%3Dwindow.location%3Bif%20(window.location.protocol%20!%3D%20%22https%3A%22)%7Bloc%3Dwindow.location.toString().replace(%2F%5Ehttp%3A%5C%2F%5C%2F%2F%2C'http%3A%2F%2Fwebcache.googleusercontent.com%2Fsearch%3Fq%3Dcache%3A')%3B%7Delse%7Bloc%3Dwindow.location.toString().replace(%2F%5Ehttps%3A%5C%2F%5C%2F%2F%2C'https%3A%2F%2Fwebcache.googleusercontent.com%2Fsearch%3Fq%3Dcache%3A')%3B%7Dwindow.location.replace(loc%20%2B%20'%26num%3D1%26strip%3D1%26vwsrc%3D0')%7D)()
