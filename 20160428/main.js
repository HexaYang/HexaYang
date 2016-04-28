var MainCon = function(){
	this.id = 'main_star';
	this.el = $('<div class="container" id="'+this.id+'">').hide();
	this.page = [];
	$('body').append(this.el);

	this.addPage = function(class_name,id_name){
		var page = $('<div class="page section">');
		if (class_name != undefined) {
			page.addClass(class_name);
		}
		if (id_name != undefined) {
			page.attr('id',id_name);
		}
		this.el.append(page);
		this.page.push(page);
/*		if ( typeof whenAddPage === 'function') {
			this.whenAddPage();
		}*/
		return this;
	};

	this.addComponent = function(name,cfg){
		var cfg = cfg || {};
		cfg = $.extend({
			'type':'base'
		},cfg)
		var component;
		var page = this.page.slice(-1)[0];
		switch(cfg.type){
			case 'base': 
				component = new ComponentBase(name,cfg);
				break;
			case 'bar':
				component = new ComponentBar(name,cfg);
				break;
			default:
		};
		page.append(component);
		return this;
	};

	this.loader = function(){

	};
}