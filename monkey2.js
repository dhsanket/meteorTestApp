if (Meteor.isClient) {
 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Monkey.find().count()==0) {
    	Monkey.insert({monkeyIndex:0})
    }
  });
}
