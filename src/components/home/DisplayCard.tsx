import { Card, Progress } from "antd";
import image1 from '../../assets/images/decrease.png'
import image2 from '../../assets/images/increase.png'
import image3 from '../../assets/images/order.png'

const DisplayCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
        flexWrap: "wrap", // Allow flex items to wrap to the next line
      }}
    >
      <Card style={{ width: '100%', maxWidth: '500px', backgroundColor: "#152239", color: "white", marginBottom: '20px' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{fontSize:'17px',}}>UNITS SOLD</p>
          <p>View</p>
        </div>
        <div style={{ color: "white" }}>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "35px", fontFamily: "monospace" }}>12,000</p>
            <p style={{ marginLeft: "5px", alignSelf: "flex-end" }}>
              smartphones
            </p>
          </div>

          <Progress
            percent={50}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />
        </div>

        <div>
            <img src={image1} alt="" style={{width:'30px'}} />
        </div>
      </Card>

      <Card style={{ width: '100%', maxWidth: '500px', backgroundColor: "#152239", color: "white", marginBottom: '20px' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{fontSize:'17px',fontWeight: 'semi-bold'}}>UNITS AVAILABLE</p>
          <p>View</p>
        </div>
        <div style={{ color: "white" }}>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "35px", fontFamily: "monospace" }}>12,000</p>
            <p style={{ marginLeft: "5px", alignSelf: "flex-end" }}>
              smartphones
            </p>
          </div>

          <Progress
            percent={50}
            status="active"
            strokeColor={{ from: "#04eb41", to: "#00f9f1f0" }}
          />
        </div>
        
        <div>
            <img src={image2} alt="" style={{width:'30px'}} />
        </div>

      </Card>

      <Card style={{ width: '100%', maxWidth: '500px', backgroundColor: "#152239", color: "white", marginBottom: '20px' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{fontSize:'17px',}}>TOTAL ORDERS</p>
          <p>View</p>
        </div>
        <div style={{ color: "white" }}>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "35px", fontFamily: "monospace" }}>12,000</p>
            <p style={{ marginLeft: "5px", alignSelf: "flex-end" }}>
              orders
            </p>
          </div>

          <Progress
            percent={50}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />
        </div>

        <div>
            <img src={image3} alt="" style={{width:'30px'}} />
        </div>
      </Card>
    </div>
  );
};

export default DisplayCard;
