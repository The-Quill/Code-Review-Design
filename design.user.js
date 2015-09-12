var styles_to_apply = {
	'#hlogo': {
		'margin': '0px 0 0 0'
	},
	'#hlogo a': {
		  'background': 'transparent url(\'http://i.imgur.com/MqFMOAw.png\') no-repeat left top'
		, 'width': '400px'
    	, 'margin-top': '5px'
    	, 'height': '164px'
    	, 'background-size': '87% 50%'
		, 'font-size': '0'
	},
	'#header': {
		'height': '165px'
	},
	'.nav li.youarehere a' :{
    	  'font-weight': '700'
    	, 'color': '#FF6700'
	},
	'#tabs a.youarehere, .tabs a.youarehere, #tabs a:hover, .tabs a:hover': {
    	  'color': '#FF6700'
    	, 'border-bottom': '2px solid #FF6700'
	},
	'#tabs a.youarehere, .tabs a.youarehere': {
    	'font-weight': 'bold'
	},
	'body': {
		'background-color': '#5A5A5A'
	},
	'.nav li:not(.youarehere) a, .footer a, #footer th, #footer-sites a, #copyright a, .top-footer-links a': {
		'color': '#FFF'
	},
	'.youarehere': {
		'color': '#FF6700'
	},
	'#copyright, #svnrev': {
		  'text-align': 'left'
		, 'color': '#FFF'
	},
	'.container': {
		'box-shadow': '#404040 0 120px 0 inset'
	},
	'#footer': {
		'background-color': '#404040'
	},
	'.footerwrap': {
		  'padding': '15px 10px 70px 10px'
		, 'background': 'rgba(0,0,0,0) url(\'http://i.imgur.com/7NJN9g7.png\') no-repeat center bottom'
	}
};

for (var style in styles_to_apply){
	if (typeof $(style) !== 'undefined'){
		for (var i = 0, length = $(style).length; i < length; i++){
			for (var element in styles_to_apply[style]){
				$(style)[i].style[element] = styles_to_apply[style][element];
			}
		}
	}
}