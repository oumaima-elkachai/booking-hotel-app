import './App.css';
import 'antd/dist/antd.css';
import {  Layout } from 'antd';
import Home from './pages/Home';
import Article from './components/Article';
import AppFooter from './components/AppFooter';
import Naavbar from './components/Naavbar';
import Rech from './components/Rech';
import Activities from './components/Activities';

const {Footer , Content } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      
        <Naavbar/>
    
      <Content>
        <Home/>
        
        <Article/>
        <Activities/>
        <div className='block featureBlock bgGray'>
        <div className='container-fluid'>
        <div className='titleHolder'>
          <p></p>
        </div>
        </div>
        </div>
        
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    
    </Layout>
  );
}

export default App;
