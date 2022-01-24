import App from './scripts/App/App';
import './styles.css';

const app = new App();

document.body.appendChild(app.element);
app.start();
// async function govno() {
//   const res = await fetch('http://localhost:3000/garage');
//   const data = await res.json();
//   console.log(data);
// }
// govno()
