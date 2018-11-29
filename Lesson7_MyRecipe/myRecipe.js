/*
    Program Name:   My Recipe Display Application
    
    Author:     Thomas Darby
    
    Date:   November 28, 2018
    
    Filename:   script.js
*/

/*global $ */

function check(event) {
    $(event.currentTarget).css("color", "red");
}

$("h3").hover(function() {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}, function() {
    $(this).css("background-color", "#04819E");
});

$("ul").children().click(check);
$("p").siblings().click(check); 

/* $("li").click(check);
$("p").click(check); */