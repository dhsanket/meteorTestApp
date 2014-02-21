Template.taskItem.events({
	'change .checkbox': function (e) {		
		var isChecked = $(e.target).is(':checked')
		Task.update({_id: this._id},{'$set':{checked:isChecked}})
	}
});