// 1) start setting up Postgre 
// http://www.psequel.com/

// 2) set up brew
// Every time you do something with homebrew 
// -it's a way to download packages from the Internet on your terminal.
// 1. in terminal
  // cd desktop
  // brew update
  // brew doctor
  // brew install postgresql
  // brew services start postgresql（to start)
  // brew services stop postgresql (to stop)
  // brew services start postgresql

// 2. in order to use postgres(in terminal)
// we need to create db
  // createdb 'test' <- the name of db
// open PSequel (instead of using 'TablePlus')
  // Host: 
  // It asks for the host which is the link to where the database is located
  // Port:
  // This is the default port number of '5432'
  // Database: -> 'test'
  // click -> connect

// 3. In order to do the same thing we just did with the GUI
  // (in terminal) 
  // psql 'test'