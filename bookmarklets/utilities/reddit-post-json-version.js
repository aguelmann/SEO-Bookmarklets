/**
 * Reddit Post - JSON Version
 * 
 * Category: Utility Tools
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(()=>{try{const u=new URL(location.href);const p=u.pathname;/\.json\/?$|\/\.json\/?$/.test(p)||(u.pathname=p.replace(/\/?$/,%27/%27)+%27.json%27);window.open(u.href,%27_blank%27)}catch(e){window.open(location.href.replace(/[#?].*$/,'').replace(/\/?$/,'/')+'.json','_blank')}})();
