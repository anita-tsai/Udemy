// resource: What is CDN?
// https://www.cloudflare.com/zh-tw/learning/cdn/what-is-a-cdn/

// 1) install Bootstrap

// 2) we need to add files to our project
    // but a better way is
    // we can use something called a CDN
    // And so what is a CDN? A CDN is a Content Delivery Network.
    // Bootstrap has this link and they're hosting the Bootstrap CSS files for us.
    // So we don't even need to include it in our project.
    // All we need to do is add this line into our HTML 
    // and you'll see here that the 'link' tag 
    // which refers to a stylesheet has an 'href' 
    // that links us to the Bootstrap minified CSS.
    // And that's what a Content Delivery Network is.
    // We don't need to include our files into our project 
    // we just link to someplace else that is actually hosting this file.



// 3) create a index.html file
// 4) copy the CDN link line and paste on index.html file
// 5) add a navigation bar
    // select: Component -> Navbar
// 6) add a Jumbotron
// 7) add a Modal
// 8) add our own stylesheet
    // must be blow the Bootsrap, it means that
    // our style will override everything
// 9) create a style.css file