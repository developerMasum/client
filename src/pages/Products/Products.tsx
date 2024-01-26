import { Button, Card, Table } from "antd";
import type { TableColumnsType } from 'antd';


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Mobile Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Band',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Model',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Operating System',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Release Date',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Screen Size',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Storage',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
 
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <div style={{display:'flex'}}> <Button> edit </Button> <Button> Delete </Button> </div>,
    },
    // {
    //   title: 'Action',
    //   key: 'operation',
    //   fixed: 'right',
    //   width: 100,
    //   render: () => <Button> Delete </Button>,
    // },
  ];
  
  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }


const Products = () => {

    return (
       <Card  title="SmartPhones Inventory"   >
         <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
       
       </Card>
    );
};

export default Products;