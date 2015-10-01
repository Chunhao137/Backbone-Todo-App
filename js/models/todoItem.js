var TodoItem = Backbone.Model.extend({
	defaults:{
		completed:false
	},
	urlRoot:"http://jsonplaceholder.typicode.com/todos"
});
