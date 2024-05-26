import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Auth from './pages/auth/Auth';
import Group from './pages/groups/Group';
import AllGroups from './pages/groups/AllGroups';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
    const [navbarStyle, setNavbarStyle] = useState({ color: 'white' });
    const location = useLocation();

    useEffect(() => {
        setNavbarStyle({ color: 'white' })
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    switch (section.id) {
                        case 'inicio':
                            setNavbarStyle({ color: 'white' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'white');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(255, 255, 255, 0.2)');
                            break;
                        case 'groups':
                            setNavbarStyle({ color: 'black' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'black');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(0, 0, 0, 0.2)');
                            break;
                        case 'questions':
                            setNavbarStyle({ color: 'white' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'white');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(255, 255, 255, 0.2)');
                            break;
                        case 'contact':
                            setNavbarStyle({ color: 'black' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'black');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(0, 0, 0, 0.2)');
                            break;
                        case 'group-page':
                            setNavbarStyle({ color: 'black' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'black');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(0, 0, 0, 0.2)');
                            break;
                        case 'all-groups':
                            setNavbarStyle({ color: 'black' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'black');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(0, 0, 0, 0.2)');
                            break;
                        default:
                            setNavbarStyle({ color: 'white' });
                            document.documentElement.style.setProperty('--navbar-text-color', 'white');
                            document.documentElement.style.setProperty('--navbar-shadow-color', 'rgba(255, 255, 255, 0.2)');
                            break;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <>
            <Navbar style={navbarStyle} />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/auth" Component={Auth} />
                <Route path="/groups" Component={AllGroups} />
                <Route path="/groups/:gid" Component={Group} />
                <Route path="/dashboard" Component={Dashboard} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
