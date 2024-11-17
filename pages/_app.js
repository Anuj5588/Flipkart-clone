import Category from "./category";
import Navbar from "./Navbar";
import './styles/globals.css';
import {UserProvider} from './context';
import PropertyForm from "./properties";

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}
