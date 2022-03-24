

import './index.less';
import { Row, Col,Statistic } from 'antd';

import { Card, Avatar } from 'antd';
const { Meta } = Card;
const TabList = () => {
    return (
        <>
            <div className="title">213</div>
            <Row>
                {
                    [1, 2, 3, , 4, 5, 6, 7, 8, 9].map(item => {
                        return (
                            <Col   style={{minWidth:180}} xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }} xxl ={{ span: 4 }}>
                                <Card className="col-item">
                                    <Meta
                                        avatar={<Avatar size={44} src="http://localhost:8000/favicon.ico" />}
                                        title="除此之外"
                                        description="一个质量很高的精品免费学习网站，不需要登录，直接点击打开课程就可以观看。"
                                    />
                                    <div className="description">
                                        dasdadsa
                                    </div>

                                    <Statistic  className="statistic"  value={112893} />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}


export default TabList;