import React from 'react';
import {Col,Row,Card}from 'antd'
const { Meta } = Card;


const Activities = () => {
    return (
        
        <div>
            <div className='block featureBlock bgGray'>
        <div className='container-fluid'>
        <div className='titleHolder'>
          <h2> des lieux a decouvrir </h2>
        </div>
        </div>
        </div>
            <Row gutter={[16, 16]}>
            <Col span={6} >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src="https://th.bing.com/th/id/OIP.oqQsQklUznLodAU5MycMiQHaE7?w=236&h=180&c=7&r=0&o=5&pid=1.7" />}
                >
                <Meta title="L' amphithéâtre d'El Jem" description="" />
                </Card>
            </Col>
            <Col span={6} >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="" />}
                >
                <Meta title="shopping ? Mall of Sousse" description="" />
                </Card>
            </Col>
            <Col span={6} >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={6} >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
            
        </div>
    );
};

export default Activities;