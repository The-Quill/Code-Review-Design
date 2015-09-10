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
	'.nav a': {
		'color': '#FFFFFF'
	},
	'#header': {
		'height': '165px'
	},
	'body': {
		'background-color': '#5A5A5A'
	},
	'a': {
    	'color': '#FFF'
	},
	'#copyright': {
		  'text-align': 'left'
		, 'color': '#FFF'
	},
	'svnrev': {
		  'text-align': 'left'
		, 'color': '#FFF'
	},
	'.container': {
		'box-shadow': '#404040 0 120px 0 inset'
	},
	'#footer': {
		'background-color': '#404040'
	},
	'#footer th': {
    	'color': '#FFF'
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