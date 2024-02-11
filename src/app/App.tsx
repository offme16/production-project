import { Route, Routes } from 'react-router-dom';
import './style/index.scss'
import About from 'pages/About/ui/About';
import Main from 'pages/Main/ui/Main';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/config/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

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
        </div>
    )
}
export default App;