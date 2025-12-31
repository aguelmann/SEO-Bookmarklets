/**
 * Identify External/Internal Links
 * 
 * Category: Link Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(){var i,x; for (i=0;x=document.links[i];++i)x.style.color=[&quot;blue&quot;,&quot;red&quot;,&quot;orange&quot;][sim(x,location)]; function sim(a,b) { if (a.hostname!=b.hostname) return 0; if (fixPath(a.pathname)!=fixPath(b.pathname) || a.search!=b.search) return 1; return 2; } function fixPath(p){ p = (p.charAt(0)==&quot;/&quot; ?%20%22%22%20:%20%22/%22)%20+%20p;/*many%20browsers*/%20p=p.split(%22?%22)[0];/*opera*/%20return%20p;%20}%20})()
