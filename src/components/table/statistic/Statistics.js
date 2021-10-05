import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './Statistic.scss'
export default function Statistics(){
return(
  <div className="site-statistic-demo-card">
    <Row className="rows" gutter={16}>
      <Col span={5}>
        <Card className="statistic-demo-card">
          <Statistic
            title="Average Flow Rate"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Average Pressure"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Maximum Flow Rate"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Minimum Flow Rate"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
);
}