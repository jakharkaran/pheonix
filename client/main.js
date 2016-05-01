import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

helloArray = ["Hej Verden", "Bonjour le monde", "Hallo Welt", "Hola Mundo", "Helo Byd", "Sawubona Mhlaba", "Kaixo Mundua", "Hello World"];

Template.body.onCreated(function bodyOnCreated() {
    this.helloString = new ReactiveVar("Hello World");
});

Template.body.helpers({
    helloString: function() {
        return Template.instance().helloString.get();
    }
});

Template.body.events({
    'click .change-string': function(event, instance) {
        instance.helloString.set(helloArray[Math.floor(Math.random() * helloArray.length)]);
        console.log("clicked! " + instance.helloString.get());
    }
});
