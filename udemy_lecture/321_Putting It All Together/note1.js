/*  in react.app  */
// 1) to test 'signin' with the user doesn't exist
// email: dora@email.com, password: stars
// result: can't let me signin

// 2) to test 'register'
// 1. keyin infomation
// name: Dora, email: dora@email.com, password: stars
// get -> 'Dora, your current entry count is... 0'

// 2. find a photo and keyin
// it shows a photo
// get -> 'Dora, your current entry count is... 1'

// 3. click sign out

// 4. back to signin and try again
// name: Dora, email: dora@email.com, password: stars
// result: signin successfully

// 5. go to signin and with the wrong infomation
// name: Dora, email: dora@email.com, password: moon
// result: can't let me signin

// 6. signin and send a photo again
// result: the count increases -> Dora, your current entry count is...2
