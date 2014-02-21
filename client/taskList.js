Template.taskList.helpers({
	tasks: function () {
		return Task.find()
	}
});