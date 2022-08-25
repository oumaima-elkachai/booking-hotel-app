import React from 'react';
import { Row,Col } from 'antd';
import {Card,Rate} from 'antd';
const { Meta } = Card;

function Article (){
    return (
        <div id='article' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Découvrez des locations de vacances à proximité</h2>
                    <p>Réservez des locations de vacances avec l’espace, l’intimité et les équipements dont vous avez besoin.</p>

                </div>
            <Row gutter={[16, 16]}>
               <Col span={8} ><Card hoverable
               cover={<img alt="example" src="https://media-cdn.tripadvisor.com/media/photo-s/1c/17/63/1b/vue-generale.jpg" />}>
                <Meta title="Fondouk Djerba" description="" />
                <Rate />
                </Card></Col>
               <Col span={8} ><Card hoverable
               cover={<img alt="example" src="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/80457020.jpg?k=123a02ed188f781140cbace1e1e90e6e14abc602ef9d05183052943a249f7679&o=" />}
               >
                <Meta title="La Cigale Tabarka" description="" />
                <Rate/>
                </Card></Col>
               <Col span={8} ><Card hoverable
               cover={<img alt="example" src="https://resa.tunisiepromo.com/application/assets/image/hotel_photo/123191964.jpg" />}
               >
                <Meta title="Dar Tozeur" description="" />
                <Rate/>
                </Card></Col>
            </Row>
            </div>
        </div>
    );
};

export default Article;