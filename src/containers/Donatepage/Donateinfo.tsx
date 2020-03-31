import React from 'react';
import { Typography , Divider } from 'antd';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
const { Title, Paragraph, Text } = Typography;


const Donateinfo = () =>{
    return(
      <>
      <Row gutter={[16, 16]}>
      <Col  sm={10}>
      <Carousel autoplay style={{background: "#364d79"}} >
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
  </Col>
      <Col sm={14}>
    <Typography>
  <Paragraph>
      <Title>Introductio Introductio Introductio Introductio</Title>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Text>
      hakim maaouia
    </Text>
      </Typography>
      </Col>

      </Row>
      </>
    )
}
export default Donateinfo;