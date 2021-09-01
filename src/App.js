import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import IntroductionPage from './pages/IntroductionPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Router>
            <PrivateRoute exact path="/" component={IntroductionPage} />
            <PrivateRoute exact path="/introduction" component={IntroductionPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
