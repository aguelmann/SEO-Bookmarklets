/**
 * Click to Drag Elements
 * 
 * Category: Utility Tools
 * 
 * @author SEO Community
 * @license MIT
 */

javascript:/*dragon*/var%20b=X=Y=T=L=0;document.addEventListener(%22click%22,function(a)%7Ba.preventDefault()%7D,!0);document.addEventListener(%22mousedown%22,c);document.addEventListener(%22touchstart%22,c);function%20c(a)%7Ba.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute(%22data-drag%22,b),a.target.style.position=%22relative%22,T=a.target.style.top.split(%22px%22)[0]%7C%7C0,L=a.target.style.left.split(%22px%22)[0]%7C%7C0);X=a.clientX%7C%7Ca.touches[0].clientX;Y=a.clientY%7C%7Ca.touches[0].clientY%7Ddocument.addEventListener(%22mousemove%22,d);document.addEventListener(%22touchmove%22,d);function%20d(a)%7Bif(%22%22!==b)%7Bvar%20e=document.querySelector('[data-drag=%22'+b+'%22]');e.style.top=parseInt(T)+parseInt((a.clientY%7C%7Ca.touches[0].clientY)-Y)+%22px%22;e.style.left=parseInt(L)+parseInt((a.clientX%7C%7Ca.touches[0].clientX)-X)+%22px%22%7D%7Ddocument.addEventListener(%22mouseup%22,f);document.addEventListener(%22touchend%22,f);function%20f()%7Bb=%22%22%7Ddocument.addEventListener(%22mouseover%22,g);function%20g(a)%7Ba.target.style.cursor=%22move%22;a.target.style.boxShadow=%22inset%20lime%200%200%202px,lime%200%200%202px%22%7Ddocument.addEventListener(%22mouseout%22,h);function%20h(a)%7Ba.target.style.cursor=a.target.style.boxShadow=%22%22%7D;
