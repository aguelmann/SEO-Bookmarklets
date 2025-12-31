/**
 * Google SERP - Extract Text
 * 
 * Category: SERP Analysis
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:(function(D,B,d,t){B=D.body,d=D.createElement('DIV'),t=D.createElement('TEXTAREA');d.style='position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998;background:#fff;font:normal%2016px/18px%20monospace;padding:10px;box-sizing:border-box;overflow:hidden;border:0';t.style='margin:0;padding:0;width:100%;height:100%;resize:none;border:0;outline:none%20!important;font:normal%2016px/18px%20monospace';d.appendChild(t);t.textContent=B.innerText||B.textContent;D.body.appendChild(d);t=D.createElement('B');t.innerHTML='%C3%97';t.style='position:fixed;display:block;top:10px;right:10px;z-index:99999;background:red;color:#fff;width:1em;height:1em;padding:.25em;text-align:center;cursor:pointer;border-radius:50%;box-shadow:0%200%203px%202px%20rgba(0,0,0,.3)';d.appendChild(t);t.onclick=d.remove.bind(d)})(document);
