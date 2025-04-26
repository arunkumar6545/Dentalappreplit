import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta information to the document head
document.title = "Bright Smile Dental Clinic";
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Providing quality dental care in a comfortable and relaxing environment. Your smile is our top priority.';
document.head.appendChild(meta);

createRoot(document.getElementById("root")!).render(<App />);
