/**
 * Export Google Sheet as CSV
 * 
 * Category: Utility Tools
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:var%20winURL%20=%20window.location.href;if(winURL.indexOf('/edit#gid=')%20%3E%200)%7Bwindow.location.assign(winURL.replace('/edit#gid=',%20'/export?format=csv&gid='));%7Delse%7Balert('Incorrect%20URL%20format');%7D
