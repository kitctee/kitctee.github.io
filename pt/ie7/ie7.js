/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'pt-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pt-menu': '&#xe608;',
		'pt-news': '&#xe601;',
		'pt-article': '&#xe602;',
		'pt-prog': '&#xe600;',
		'pt-live': '&#xe603;',
		'pt-drama': '&#xe604;',
		'pt-shop': '&#xe605;',
		'pt-raise': '&#xe606;',
		'pt-print': '&#xe607;',
		'pt-email': '&#xe609;',
		'pt-info': '&#xe60b;',
		'pt-info-back': '&#xe60c;',
		'pt-arrow-up': '&#xe60e;',
		'pt-arrow-down': '&#xe60d;',
		'pt-arrow-left': '&#xe612;',
		'pt-arrow-right': '&#xe60f;',
		'pt-up': '&#xe616;',
		'pt-down': '&#xe61c;',
		'pt-left': '&#xe61a;',
		'pt-right': '&#xe619;',
		'pt-login': '&#xe611;',
		'pt-logout': '&#xe610;',
		'pt-play': '&#xe625;',
		'pt-check': '&#xe629;',
		'pt-cross': '&#xe628;',
		'pt-add': '&#xe631;',
		'pt-remove': '&#xe62f;',
		'pt-list': '&#xe627;',
		'pt-setting': '&#xe613;',
		'pt-live2': '&#xe633;',
		'pt-fire': '&#xe618;',
		'pt-headphone': '&#xe615;',
		'pt-search': '&#xe614;',
		'pt-facebook': '&#xe61e;',
		'pt-twitter': '&#xe624;',
		'pt-youtube': '&#xe620;',
		'pt-google-plus': '&#xe623;',
		'pt-podcast': '&#xe61d;',
		'pt-whatsapp': '&#xe621;',
		'pt-line': '&#xe622;',
		'pt-time': '&#xe60a;',
		'pt-calendar': '&#xe617;',
		'pt-chat': '&#xe61b;',
		'pt-share': '&#xe61f;',
		'pt-facebook-like': '&#xe626;',
		'twitch': '&#xe632;',
		'chrome': '&#xe62a;',
		'firefox': '&#xe62b;',
		'IE': '&#xe62c;',
		'opera': '&#xe62d;',
		'safari': '&#xe62e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
