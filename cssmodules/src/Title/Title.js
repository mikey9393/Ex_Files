import React from 'react';

// import css module from module.css into a into a className variable named 'styles'
// prepend that variable with the corresponding css class defined in the module.css 
import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
      <h1 className={styles.title}>Title</h1>
    </div>
  );
}
export default Title;

/** Remove Class/Stateful Component */
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Title</h1>
//       </div>
//     );
//   }
// }
