var TodoItemView = Backbone.View.extend({
	tagName:'li',
	initialize:function(options){
		if(!(options && options.model)){
			throw new Error("model is not specified")
		}
		this.model.on("change", this.render, this)
	},
	events:{
		"click #toggle":"toggleClick",
		"click #delete":"deleteClick"
	},
	deleteClick:function(){
		this.model.destroy();
	},
	toggleClick:function(){
		this.model.set("completed", !this.model.get("completed"))
	},	
	render:function(){
		this.$el.attr("id", this.model.id);
		this.$el.toggleClass("completed",this.model.get("completed") )
		var template = $('#newTodoItem').html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html)
		return this;
	}
})