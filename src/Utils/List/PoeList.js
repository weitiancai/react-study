import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  axios({
    method: "get",
    url: "/meet-before/menu/select?title=xyz",
  }).then((res) => {
     console.log(res);
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('/meet-before/menu/select?title=xyz');  // 替换为你的后端接口路径
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Size: {item.size}</p>
          <p>Time: {item.time}</p>
          <p>Path: {item.path}</p>
          <p>Tag: {item.tag}</p>
          <p>Fsize: {item.fsize}</p>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;