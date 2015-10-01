var TodoItemsView = Backbone.View.extend({
	id: "todoItemContainer",
	initialize:function(options){
		if(!(options && options.model)){
			throw new Error("model is needed");
		}
		this.model.on("add", this.onAddItem,this);
		this.model.on("remove", this.onRemoveItem, this);
	},
	events:{
		"click #add": "clickAdd",
		"keypress #addNewTodoItems" :"onKeyPress"
	},
	onKeyPress:function(e){
		if(e.keyCode===13){
			this.clickAdd();
		}
	},
	clickAdd:function(){
		var getVal = this.$("#addNewTodoItems");
		var todoItem = new TodoItem({title: getVal.val()});
		this.model.create(todoItem);
		getVal.val("");
	},
	onRemoveItem:function(todoItem){
		this.$("li#"+todoItem.id).remove();
	},
	onAddItem:function(todoItem){
		var todoView = new TodoItemView({model:todoItem});
		this.$("#todoItems").append(todoView.render().$el);
	},
	render:function(){
		var template = $("#newTodoItems").html();
		var html = Mustache.render(template);
		this.$el.html(html);
		return this
	}
})