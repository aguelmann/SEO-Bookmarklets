/**
 * Highlight Headings (H1-H6)
 * 
 * Color-codes all heading tags (H1-H6) on the page with different colors
 * and prepends the heading level to each tag for easy content structure analysis.
 * 
 * Colors:
 * - H1: Pink
 * - H2: Orange  
 * - H3: Yellow
 * - H4: Aquamarine
 * - H5: Light Sky Blue
 * - H6: Plum
 * 
 * @category Content Analysis
 * @author SEO Community
 * @license MIT
 */

javascript:void((function(){
  var a, b, c, d, e, f;
  f = new Array('pink', 'orange', 'yellow', 'aquamarine', 'lightskyblue', 'plum');
  
  for(a=1; a<=6; a++){
    b = document.getElementsByTagName('h'+a);
    for(c=0; c<b.length; c++){
      d = b[c];
      e = d.style;
      e.backgroundColor = f[a-1];
      e.border = 'solid';
      e.padding = '2px';
      e.color = 'black';
      d.innerHTML = 'H'+a+' - '+d.innerHTML;
    }
  }
})())
