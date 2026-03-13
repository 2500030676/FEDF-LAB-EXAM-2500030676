import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function ApiDemo() {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const displayData = async () => {
        try {
            const response = await axios.get("https://dummy-json.mock.beeceptor.com/posts")
            setData(response.data)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        displayData()
    }, []);
  return (
    <div>
      <h1><u>Axios Demo</u></h1>
      {
        error ? <b>{error}</b> :
        data.length == 0 ? <strong>Loading...................</strong> :
        <table border={10}>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>LINK</th>
            <th>COMMENT COUNT</th>
           
          </tr>
          {
            data.map((value, index) => (
              <tr key={index}>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
                <td>{value.link}</td>
                <td>{value.comment_count}</td>
            
              </tr>
            ))
          }
        </table>
      }
    </div>
  )
}