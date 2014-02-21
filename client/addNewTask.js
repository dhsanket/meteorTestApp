Template.addNewTask.events({
	'click .btn': function (e) {
		e.preventDefault()
		Meteor.call('createTask', $('#name').val(), function (error, result) {
			if(error) {
				alert(error.details)
			}
		});
	}
});