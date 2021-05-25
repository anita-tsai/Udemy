/* Exercise: Load User Feature */

/*
Let's do a little exercise to make sure 
you are understanding the codebase 
and can logically think through some problems. 
As I give you the answer, 
copy the code onto your code base 
and make sure everything works. 
We will go over these changes and updates 
in the next couple of videos to make sure everything works.

PLEASE ADD THE BELOW CHANGES TO YOUR CODEBASE 
BEFORE PROCEEDING TO THE NEXT LECTURE! 
Try to answer the Q(Questions) yourself before looking at the A(Answers)

Feature to add: Load User when the sign in
*/

/*
1 --------------------------
In server.js:
in the /signin route: After the if statement:

res.json(database.users[0]);

instead of

res.json("success"). 

Q: What does this do?


2 --------------------------

In App.js (frontend code):

Q: Update the state in App.js to look like below and add the loadUser method:

  // construtor() {
    //   super();
    //   this.state = {
    //     input: '',
    //     imagUrl: '',
    //     box: {},
    //     route: 'signin',
    //     isSignedIn: false,
    //     user: {
    //       id: '',
    //       name: '',
    //       email: '',
    //       entries: 0,
    //       joined: ''
    //     }
    //   }
    // }

    // loadUser = (data) => {
    //   this.setState({ user:{
    //     id: data.id,
    //     name: data.name,
    //     email: data.email,
    //     entries: data.entries,
    //     joined: data.joined
    //   }})
    // }
Once you have the above code added, 
pass the loadUser to the Signin component as a prop. 
Then pass user.name and user.entries into the Rank component as props.

3 --------------------------
In Signin.js (frontend code):

Q: Instead of checking if onSubmitSignIn was successful, 
check the response to see if user.id exists 
and call two functions if a user is returned from the backend: loadUser(user) 
and onRouteChange('home')

4 --------------------------

In Rank.js (frontend code):

Q: Pass two props you need into the Rank component 
then display the message: "${name} , your current rank is...${entries}" :
 */
 