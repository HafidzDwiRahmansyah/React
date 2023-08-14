const Footer = function (props) {
    return(
      <div>
        <h3>{props.judul}</h3>
        <h3>Component ini dibuat menggunakan function bukan Class</h3>
        <p>Website ini dibuat oleh: {props.nama}</p>
      </div>
    );
  };
  
  export default Footer;