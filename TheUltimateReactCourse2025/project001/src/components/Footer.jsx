import '../App.css'
function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  var status = "";

  if (hour < openHour || hour > closeHour) {
    status = " ->  We're currently closed!";
  } else {
    status = " ->  We're currently open!";
  }

  return (
    <footer>{new Date().toLocaleTimeString()}{status}</footer>
  );
}

export default Footer;