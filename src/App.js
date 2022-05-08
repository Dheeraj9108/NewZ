// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navclass from './components/Navclass';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
  const App = ()=>{
  const pageSize = 15;
  // state = {
  //   progress : 0
  // }
  const [progress,setProgress] = useState(0);

  // setProgress=(progress)=>{
  //   setState({progress: progress})
  // }
    // render() {
    return (
      <div>
        <Router>
          <Navclass/>
        	<LoadingBar 
            height={3}
            color='#f11946'
            progress={progress}
           />
            <Routes>
           		<Route exact path="/"  element={<News key="general" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="general"/>}></Route>
           		<Route exact path="/business" element={<News key="business"  setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="business"/>}></Route>
           		<Route exact path="/entertainment"  element={<News key="entertainment" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="entertainment"/>}></Route>
           		<Route exact path="/health"  element={<News key="health" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="health"/>}></Route>
           		<Route exact path="/science" element={<News key="science"  setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="science"/>}></Route>
           		<Route exact path="/general" element={<News key="general" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="general"/>}></Route>
           		<Route exact path="/sports" element={<News key="sports" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="sports"/>}></Route>
           		<Route exact path="/technology"  element={<News key="technology" setProgress = {setProgress}  pageSize = {pageSize} counrty = "in" category="technology"/>}></Route>
         	</Routes>
        </Router>
      </div>  
    )
  // }
}

// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import React,{ useState } from 'react';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   switch,
//   Route,
//   // Link
// } from "react-router-dom";


// function App() {
//   const [mode ,setmode] = useState('light');
//   const [alert,setAlert] = useState(null);

//   const showAlert=(message,type)=>{
//       setAlert({
//         msg:message,
//         type : type
//       })
//       setTimeout(() => {
//         setAlert(null);
//       }, 1500);
//   }
//  const removeClass = ()=>{
//    document.body.classList.remove('primary');
//    document.body.classList.remove('success');
//    document.body.classList.remove('warning');
//    document.body.classList.remove('danger');
//    document.body.classList.remove('light');
//  }

//   const toogleeMode = (cls)=>{
//     removeClass();
//     document.body.classList.add('bg-'+cls);
//     if(mode === 'light'){
//       setmode('dark')
//       document.body.style.backgroundColor = '#042743'
//       showAlert(' : Dark Mode Enabled','success');
//       setInterval(() => {
//         document.title = 'Text util is Amazing'
//       }, 2000);
//       setInterval(() => {
//         document.title = 'Install TextUtils Now'
//       }, 1500);
//     }else{
//       setmode('light')
//       document.body.style.backgroundColor = 'white'
//       showAlert(' : Light Mode Enabled','success');
      
//     }
//   }
//   return (
//     <> 
//     <Router>
//      <Navbar title = "Textutils" aboutText = "About Us" mode={mode} toogleeMode={toogleeMode}/>
//      <Alert alert={alert}/>
//      {/* <Navbar/> */}
//     <div className="container">
//     <Routes>
//           <Route exact path="/about" element={<About mode={mode}/>}>
//           </Route>
//           <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to Analyze" mode = {mode}/>}>
//           </Route>
//     </Routes>
//     </div>
//     </Router>
//     </>
//   );
// }

export default App;
