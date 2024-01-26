import { Card, Progress } from "antd";

const Section = () => {
    const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
  return (
    <Card  title="STORAGE MANAGEMENT" bordered={false} style={{ width: 700 ,backgroundColor:'#00875A',color:'white' }}>
      <div style={{textAlign:'center'}}>
        <Progress type="circle" size={250} percent={90}   strokeColor={twoColors} />
        <p style={{textAlign:'center' ,marginTop:'20px',fontSize:'18px',font:"caption"}}>STORE USED </p>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        <p>Loaded: 120 Shelves</p>
        <p>Blank: 20 Shelves</p>
      </div>
    </Card>
  );
};

export default Section;
