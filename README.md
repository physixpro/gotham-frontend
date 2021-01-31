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

1/26/2021

props is the ability to pass state around from one component to another.

*Info in one component that another component needs*

Rules for passing props -

1) You can only pass props from a parent component to a child component.


1/30/2021

we call it the try catch block!! 

Whatever is in the 'try' block , it says " hey lets try to perform these async actions!" 

IF everything runs, perfect we are good to go!

BUT if there is an 'error' then that's where the catch block is going to run! 

THEN the error param in the catch block contains all the details of this error. Which we can then use to notify the user of what went wrong.

Ask Daniel what email host/provider do they use.