/**
 * Change Anchors to Full URLs
 * 
 * Category: Link Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(){var i,c,x,h; for(i=0;x=document.links[i];++i) { h=x.getAttribute(&quot;href&quot;); x.title+=&quot; &quot; + x.innerHTML; while(c=x.firstChild)x.removeChild(c); x.appendChild(document.createTextNode(h)); } })()
