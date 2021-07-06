// 358. state management

/*
this example here is just a little diagram 
but you can see with all these arrows 
how confusing it's going to get and keeping track of all this state is really, really hard.

So we need some form of a state management, and redux.
solves this problem for us.

How could we make this diagram simpler and make things easier 
to understand in our heads as developers?

Redux came up with a novel concept.

And now the state, we keep it in a store. 
And a store is simply just the state which is this.state
that react had.
But in one massive object just like you see here.

So one single object that describes how our app should look 
and all we do is just pass down that state
to whichever component needs it as props.

So our diagram from looking like this with just react 
can go to looking like this with redux 
where none of the components need to hold state anymore.

And we can have one massive object 
that describes our entire app and whichever component needs that
prop can just be passed down to it.

And any updates that happen go through the state, 
the state gets modified and then we pass down that
information to the component. 
This diagram might be confusing without actually coding anything.
*/