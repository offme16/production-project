import { Route, Routes } from 'react-router-dom';
import './style/index.scss'
import About from './pages/About/About';
import Main from './pages/Main/Main';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <button onClick={toggleTheme}>click</button>
            <Routes>
                <Route path={'/about'} element={<About />}/>
                <Route path={'/'}  element={<Main />}/>
            </Routes>
            hiivccvcvxvx
        </div>
    )
}
export default App;