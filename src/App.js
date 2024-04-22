import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Sidebar />
                <main>
                    <h2>Bienvenido a mi proyecto </h2>
                    <p>Aqui va el contenido de mi pagina</p>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
