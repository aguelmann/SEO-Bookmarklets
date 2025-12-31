/**
 * Canonical Tag Checker
 * 
 * Category: Link Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:%20(function%20()%20{%20var%20url%20=%20document.location;%20var%20links%20=%20document.getElementsByTagName('link');%20var%20found%20=%20'Not Found';%20for%20(var%20i%20=%200,%20l;%20l%20=%20links[i];%20i++)%20{%20if%20(l.getAttribute('rel')%20==%20'canonical')%20{%20found%20=%20'Canonical Found\n\nCanonical Reference:\n'+l.getAttribute('href')+'\n\nCurrent URL:\n'+document.location;if(l.getAttribute('href')==document.location){found=found+'\n\nCanonical tag matches current URL.'}else{found=found+'\n\nThe Canonical reference and current URL are different. Canonical fallback in place.'}%20break;%20}%20}%20alert(found);%20})();
