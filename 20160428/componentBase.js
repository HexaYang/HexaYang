/*
	var cfg = {
		'type':'base' 'bar' 'point'  ,
		'text':'',
		'html':  ,
		'width': ,
		'height': ,
		'css': ,
		'bg': ,
		'center': ,
		'data':[],
		'anlimateOut':{},
		'anlimateIn':{},
		onclick:function({}),

	}

*/
var ComponentBase = function(name,cfg){
	var cfg = cfg || {};
	var id = ('c_'+Math.random()*10).replace('.','');
	var component = $('<div class="component component'+cfg.type+' component_'+name+'" id="'+id+'">');
	$('body').append(component);
	cfg.text     && component.text(cfg.text);
	cfg.html	 && component.html(cfg.html);
	cfg.width	 && component.width(cfg.width/2);
	cfg.height	 && component.height(cfg.height/2);
	cfg.css  	 && component.css(cfg.css);
	cfg.bg		 && component.css('background','url('+cfg.bg+')');

	if (cfg.center === true) {
		component.css({
			marginLeft:( cfg.width/4 * -1) + 'px',
			left:'50%'
		})
	}
	if (typeof cfg.onclick === 'function') {
		component.on('click',cfg.onclick);
	}
	component.on('leavepage',function(){
		setTimeout(function(){
			component.addClass('component'+cfg.type+'_leave').removeClass('component'+cfg.type+'_load');
			cfg.anlimateOut && component.anlimate(cfg.anlimateOut);
		},cfg.delay||0)
		return false;
	});
	component.on('loadpage',function(){
		setTimeout(function(){
			component.addClass('component'+cfg.type+'_load').removeClass('component'+cfg.type+'_leave');
			cfg.anlimateIn && component.anlimate(cfg.anlimateIn);
		},cfg.delay||0);
		return false;
	});
	return component;

}