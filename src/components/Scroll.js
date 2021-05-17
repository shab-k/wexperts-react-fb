import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Scroll = () => {
    const { pathname } = useLocation();

    useEffect(
        () => {
         window.scrollTo(0, 0);   
        },
        [pathname]
    );
    return null;
}
 
export default Scroll;

// import { useEffect } from 'react'
// import { Route, Switch, useLocation } from 'react-router-dom'
// import Home from '../pages/HomePage/Home'

// export default function App() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     // if not a hash link, scroll to top
//     if (hash === '') {
//       window.scrollTo(0, 0);
//     }
//     // else scroll to id
//     else {
//       setTimeout(() => {
//         const id = hash.replace('#', '');
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView();
//         }
//       }, 0);
//     }
//   }, [pathname]); // do this on route change

//   return (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         {/* <Route exact path="/#section-3" component={Home} /> */}
//         .
//         .
//       </Switch>
//   )
// }
