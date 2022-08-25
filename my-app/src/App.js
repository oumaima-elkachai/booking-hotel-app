import './App.css';
import 'antd/dist/antd.css';
import {  Layout } from 'antd';
import Home from './pages/Home';
import Article from './components/Article';
import AppFooter from './components/AppFooter';
import Naavbar from './components/Naavbar';
import Rech from './components/Rech';

const {Footer , Content } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      
        <Naavbar/>
    
      <Content>
        <Home/>
        
        <Article/>
        <div className='block featureBlock bgGray'>
        <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Découvrez les activités </h2>
          <p> Retrouvez vous en famille ou entre amis pour passer un bon moment ensemble, amusez-vous avec des activités fun </p>
        </div>
        </div>
        </div>
        <Rech/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    
    </Layout>
  );
}

export default App;
