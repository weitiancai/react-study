import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [title, setTitle] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, [page, pageSize, title]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/meet-before/menu/page', {
        params: {
          page: page,
          pageSize: pageSize,
          title: title
        }
      });
      setData(response.data.records);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
    setPage(1);
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
  };

  const handleDelete = async (row) => {
    const confirmed = window.confirm('Are you sure you want to delete this row?');
    if (confirmed) {
      try {
        await axios.delete(`/meet-before/menu/api/${row.id}/delete`);
        fetchData();
      } catch (error) {
        console.error('Error deleting row:', error);
      }
    }
  };

  const handleSave = async () => {
    if (selectedRow) {
      try {
        await axios.post('/meet-before/menu/edit', selectedRow);
        setSelectedRow(null);
        fetchData();
      } catch (error) {
        console.error('Error saving row:', error);
      }
    }
  };

  return (
    <div className="container">
      <div>
        <label className="label">Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <button className="button" onClick={handleSearch}>Search</button>
      </div>
      <div>
        <label>Page Size:</label>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Size</th>
            <th>Time</th>
            <th>Path</th>
            <th>Tag</th>
            <th>Fsize</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                {selectedRow === row ? (
                  <input
                    type="text"
                    value={row.title}
                    onChange={(e) => setSelectedRow({ ...row, title: e.target.value })}
                  />
                ) : (
                  row.title
                )}
              </td>
              <td>{row.size}</td>
              <td>{row.time}</td>
              <td>{row.path}</td>
              <td>{row.tag}</td>
              <td>{row.fsize}</td>
              <td>
                {selectedRow === row ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setSelectedRow(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(row)}>Edit</button>
                    <button onClick={() => handleDelete(row)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          Previous
        </button>
        <span>{page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginationComponent;