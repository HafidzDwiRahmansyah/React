// MENGAMBIL REACT MENGGUNAKAN CLASS

// import React, { Component } from "react";
// import Header from './Header';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>Hello World</h2>
//       </div>
//     );
//   }
// }

// export default App;

// END

// MEMANGGIL REACT MENGGUNAKAN FUNCTION

// import Header from "./Header";

// function Header() {
//   return (
//     <div>
//       <h2>Saya belajar react lohh...</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header/>
//       <h2>Hallo Dunia</h2>
//     </div>
//   );
// }

// END

// PARSING NILAI KE COMPONENT

// function Footer() {
//   var nama = "Hafidz";
//   return (
//     <div>
//       <h3>Halaman Footer</h3>
//       <h3>Component ini dibuat dengan menggunakan function bukan Class</h3>
//       <p>Website ini dibuat dengan oleh: {nama}</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// END

// MENGAMBIL LIST COMPONENT
import Header from './Header';
import Image from './Image';
import Footer from './Footer';

function list(){
  return(
    <div>
      <Header/>
      <Image/>
      <ol>
        <li>Satu</li>
        <li>Dua</li>
        <li>Tiga</li>
      </ol>
      <Footer judul="Halaman Footer" nama="Hafidz"/>
    </div>
  );
}

export default list;

// END
