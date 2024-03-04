import { Route, Routes } from 'react-router-dom';
import './style/index.scss'
import About from 'pages/About/ui/About';
import Main from 'pages/Main/ui/Main';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/config/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>click</button>
            <AppRouter />
        </div>
    )
}
export default App;