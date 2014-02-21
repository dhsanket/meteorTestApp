Meteor.methods({
	createTask: function (name) {
		if(!name) {
			throw new Meteor.Error(400, 'Error 400: Cannot create task', 'task have to have the name');
		}
		Task.insert({name:name})
	}
});