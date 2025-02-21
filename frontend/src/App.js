import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8081/api/endpoint');
      setResponseData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="App">
        <h1>React와 백엔드 통신</h1>
        <button onClick={handleClick} disabled={loading}>
          {loading ? '로딩 중...' : '데이터 요청하기'}
        </button>
        <div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {responseData && <p>응답: {JSON.stringify(responseData)}</p>}
        </div>
      </div>
  );
}

export default App;