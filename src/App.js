import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogues/*" 
                            element={<DialoguesContainer />} />

                        <Route path="/profile" 
                            element={<Profile />} />

                        <Route path="/news" element={<News />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/music" element={<Music />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
