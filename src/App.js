
import './App.css';
import Accordian from './components/Accordian';
import Analysis from './components/Analysis';
import DataSecurity from './components/DataSecurity';
import Footer from './components/Footer';
import Headless from './components/Headless';
import Hero from './components/Hero'
import KeySemantic from './components/KeySemantic';
import KeyWork from './components/KeyWork'

function App() {
    return (
        <>
            <Hero />
            <KeyWork />
            <Analysis />
            <Accordian />
            <Headless />
            <DataSecurity />
            <KeySemantic />
            <Footer />
        </>
    );
}

export default App;