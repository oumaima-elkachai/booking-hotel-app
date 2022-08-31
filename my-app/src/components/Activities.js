import React from 'react';
import {Col,Row,Card}from 'antd'
const { Meta } = Card;


const Activities = () => {
    return (
        
        <div id='act'>
            <div className='block featureBlock bgGray'>
        <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Maison d'hôte </h2>
        </div>
        </div>
        </div>
            <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
                hoverable
                cover={<img alt="example" src="https://th.bing.com/th/id/OIP.nX38-GYJp7OL8--RlHJFrgHaE8?pid=ImgDet&rs=1" />}
                >
                <Meta title="Villa Verde" description="Maison d'hôte à Hammamet" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img  alt="example" src="https://media.vrbo.com/lodging/43000000/42070000/42068700/42068676/813092d6.c10.jpg" />}
                >
                <Meta title=" Dar Indigo" description="Villa  Dar Indigo Sidi Bou Said" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img  alt="example" src="https://www.marhba.com/images/hisotire-gaied.jpg" />}
                >
                <Meta title="Dar El Gaïed El Maâmouri" description="" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img alt="example" src="https://voyage-et-vie.com/wp-content/uploads/2019/07/villa-Kahiina-min.jpg" />}
                >
                <Meta title=" Villa Kahina " description=" Sidi Bousaid" />
                </Card>
            </Col>
  

            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
                hoverable
                cover={<img alt="example" src="https://www.marhba.com/images/maisonsdhotes/maisondhoteentunisie.jpg" />}
                >
                <Meta title="Dar Tozeur" description="" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img  alt="example" src="https://www.marhba.com/images/maisonsdhotes/JardinsSus.jpg" />}
                >
                <Meta title="Les Jardins suspendus - Tabarka" description="" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img  alt="example" src="https://www.marhba.com/images/maisonsdhotes/CouleurMed_1.jpg" />}
                >
                <Meta title="Couleur Méditerranée - Tabarka" description="" />
                </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
            <Card
                hoverable
                cover={<img alt="example" src="https://www.marhba.com/images/maisonsdhotes/Billis.jpg" />}
                >
                <Meta title="Du côté de chez Blili's – Metline" description="" />
                </Card>
            </Col>

        </Row>
            
        </div>
    );
};

export default Activities;