var AFFWP = AFFWP || {};
AFFWP.referral_var = 'ref';
AFFWP.expiration = 90;
AFFWP.debug = 0;
AFFWP.referral_credit_last = 0;


url_bnb_price = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get(url_bnb_price));
var bnb_price = json_obj.price
var fig_price = parseFloat(json_obj.price)/1350000

var mcc_metamask_prices = {
    'bnb' : parseFloat(json_obj.price),
    'eth' : parseFloat(json_obj.price),
};
var mcc_exchange_rates = {
    'bnb' : parseFloat(json_obj.price),
    'eth' : parseFloat(json_obj.price),
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-115065157-1');

var _paq = _paq || [];
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
	  var u="//piwik.FIG TOKEN.com/";
	  _paq.push(['setTrackerUrl', u+'piwik.php']);
	  _paq.push(['setSiteId', '11']);
	  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
	})();

// Piwik
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//piwik.FIG TOKEN.com/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '11']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
// End Piwik Code

(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})();
