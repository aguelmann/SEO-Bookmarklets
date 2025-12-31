/**
 * Show Scroll Percentage
 * 
 * Category: Utility Tools
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:void((function(){var d=document;function updateScroll(){var s=(window.pageYOffset||d.documentElement.scrollTop)/(d.documentElement.scrollHeight-d.documentElement.clientHeight)*100;var div=d.getElementById('scrollPercent');if(!div){div=d.createElement('div');div.setAttribute('id','scrollPercent');div.setAttribute('style','position:fixed;top:50%;left:0;transform:translateY(-50%);background-color:rgba(0,0,0,0.8);color:yellow;padding:10px;z-index:10000;font-size:24px;font-weight:bold;');d.body.appendChild(div);}div.innerHTML=Math.round(s)+'%';}window.addEventListener('scroll', updateScroll);updateScroll();})());
