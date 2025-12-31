/**
 * Google SERP - Highlight Dates
 * 
 * Category: SERP Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(){function highlightDates(){const dateRegex=/(\b\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}\b)|(\b\d{2,4}[-\/]\d{1,2}[-\/]\d{1,2}\b)|(\bJanuary|February|March|April|May|June|July|August|September|October|November|December \d{1,2}, \d{4}\b)/gi;const walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);let node;let textNodes=[];while(node=walker.nextNode())textNodes.push(node);textNodes.forEach(function(node){if(dateRegex.test(node.nodeValue)){const span=document.createElement('span');span.style.backgroundColor='yellow';span.style.fontSize='larger';span.textContent=node.nodeValue;node.parentNode.replaceChild(span, node);}});}highlightDates();})();
