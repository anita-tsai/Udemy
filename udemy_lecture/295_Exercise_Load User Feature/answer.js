// A1: 
// We are now returning a real user from our "mock" database.



// A2: 
// Passing the loadUser method to Signin:
    // <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
// Rank with the states of the user:
    // <Rank name={this.state.user.name} entries={this.state.user.entries}/> 



// A3: 
// In the onSubmitSignIn function:
    /*
     ...
     .then(response = response.json())
     .then(user => {
         if(user.id){ /// does the user exist? Did we receive a user with a property of id?
            this.props.loadUser(user);
            this.props.onRouteChange('home');
         }
     })
    */



// A4:
    /*
    const Rank = ({ name, entries }) => {
    return (
        <div>
        <div className='white f3'>
            {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
            {entries}
        </div>
        </div>
    );
    }
    
    */