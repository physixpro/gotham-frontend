Ctrl + P is my filefinder shortcut

Ctrl + G shows the "go to line" e.g. type line here

Ctrl + A is select all

The golden rule of react - NEVER change state directly; e.g. coachName = e.target.value , instead use the setFunction e.g. setCoachName(e.target.value)

The value attribute is what ties what is inside the input to a 'state' . 

Homework -
Research Arrays; array methods. 

Find method, (google 'array.find js') <-----------------
map method
filter method
*filters out the false values in the specific array i.e. !== .


Homework - if we want to extract our different forms into their own files then we need to learn about props(props are how we share information from one component to another.)



asynchronous programming - key topic in js. e.g. async await.


1/19/2021 homework

1. use the .find method to find the specific user that we are editing , user that we clicked the edit button, and set the currently edited user state with that user/person.

2. pass that currenlty edited user state to the <EditForm /> via props.

3. Receive the currently edited user props in the <EditForm />