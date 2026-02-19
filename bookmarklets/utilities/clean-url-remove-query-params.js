/**
 * Clean URL (Remove Query Params)
 * 
 * Category: Utility Tools
 * 
 * @author Andre Guelmann
 * @license MIT
 */

javascript:console.log('Original URL: '+window.location);window.history.replaceState('','',window.location.origin+window.location.pathname);

