// 1) create a box(in App.js):
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       imgUrl: '',
//       box: {} //-> new
//     }
//   }

import { Component } from "react";

// 2)create a new fn named calculateFaceLocation (in App.js):
// ->we want to call this function 'calculateFaceLocation' 
// based on the inputs that we get from 'Clarifai'.
// So in our case, with the response that they give us, 
// we want to use this response, and call
// 'calculateFaceLocation' with the 'response' data.

f(x)
g(x)

g(f(x))

const f = (a) => a * a;

const result = f(10);

//3) pass box into FaceRecognition(in App.js) & (FaceRecognition.js)
// 3-1) 
// <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>
// 3-2) 
// const FaceRecognition = ({ imgUrl, box }) => {
//   return (
//     <div className='center ma'>
//       <div className='absolute mt2'>
//         <img id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
//         <div
//           className='bounding-box'
//           style={{
//             top: box.topRow,
//             right: box.rightCol,
//             bottom: box.bottomRow,
//             left: box.leftCol
//           }}
//         >
//         </div>
//       </div>
//     </div>
//   )
// }

// 4) create a Component named FaceRecognition.css
// .bounding-box{
//   position: absolute;
//   box-shadow: 0 0 0 3px #149df2 inset;
//   display: flex;
//   flex-wrap: wrap;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   cursor: pointer;
// }