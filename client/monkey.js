Template.monkey.helpers({
	monkeyName: function () {
		var names = ["Krzysztof","Sławek","Michał","Bartek","Ian","Paul","Sanket"]
		var monkey = Monkey.findOne()
		return monkey && names[monkey.monkeyIndex % names.length]
	}
});

Template.monkey.events({
	'click .btn': function () {
		var id = Monkey.findOne()._id
		Monkey.update({_id:id},{'$inc':{'monkeyIndex':1}})
	}
});