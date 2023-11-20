import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/meet-before/menu/select?title=xyz');  // 替换为你的后端接口路径
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Size</th>
          <th>Time</th>
          <th>Path</th>
          <th>Tag</th>
          <th>Fsize</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.size}</td>
            <td>{item.time}</td>
            <td>{item.path}</td>
            <td>{item.tag}</td>
            <td>{item.fsize}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default YourComponent;