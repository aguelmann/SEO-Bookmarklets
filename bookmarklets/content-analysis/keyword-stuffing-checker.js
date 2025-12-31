/**
 * Keyword Stuffing Checker
 * 
 * Category: Content Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(){var T={},W=[],C=0,s,i; function F(n){var i,x,a,w,t=n.tagName;if(n.nodeType==3){a=n.data.toLowerCase().split(/[\s\(\)\:\,\.;\<\>\&\'\&quot;]/);for(i in a)if(w=a[i]){w=&quot; &quot;+w;T[w]=T[w]?T[w]+1:1;++C;}}if(t!=%22SCRIPT%22&&t!=%22STYLE%22)for(i=0;x=n.childNodes[i];++i)F(x)}F(document);for(i%20in%20T)W.push([T[i],i]);W.sort(function(a,b){var%20x=b[0]-a[0];return%20x?x:((b[1]%3Ca[1])?1:-1)});%20s=%22%3Ch3%3E%22+C+%22%20words%3C/h3%3E%22;for(i%20in%20W)s+=W[i][0]+%22:%22+W[i][1]+%22%3Cbr%3E%22;with(open().document){write(s);close()}})()
