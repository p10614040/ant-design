import React from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const customIcons: Record<number, React.ReactNode> = {
  D: <FrownOutlined />,
  C: <FrownOutlined />,
  C+: <FrownOutlined />,
  B: <MehOutlined />,
  B+: <SmileOutlined />,
  A: <SmileOutlined />,
  A+: <SmileOutlined />,
};

const App: React.FC = () => (
  <>
    <Rate defaultValue={2} character={({ index }: { index: number }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }: { index: number }) => customIcons[index + 1]} />
  </>
);

export default App;
