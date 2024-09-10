import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

export const metadata = {
  title: "Gloria Ugwuanyi - Frontend Website Developer Portfolio",
  description: "Engaging UIs & Performant Web Apps: Built with React/Vue.js & modern web tech (HTML, CSS, JS).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
