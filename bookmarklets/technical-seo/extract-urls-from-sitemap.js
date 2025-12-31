/**
 * Extract URLs from Sitemap
 * 
 * Category: Site Files
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(){try{var parser=new DOMParser();var xmlString=document.body.innerText||document.body.textContent;var doc=parser.parseFromString(xmlString,'text/xml');var urls=doc.getElementsByTagName('loc');if(urls.length===0){console.error('No <loc> tags found. Check if the page content is correctly recognized as XML.');return;}var outputWindow=window.open('','_blank');var output='';for(var i=0;i<urls.length;i++){output+=urls[i].textContent+'\\n';}outputWindow.document.write('<pre>'+output+'</pre>');}catch(e){console.error('Error in Bookmarklet: '+e.message);}})();
