import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Typography, Space } from 'antd';
import "./App.scss";
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails  } from "./components";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <header className="App-header" loading={loading}>
          <h1>Loading Nesting Doll</h1>
          <div className="full-container">
            <div className="data-box-container">
              <div className="control-container">
                <h5>Nesting Controller</h5>
                <div className="data-box">
                  C1
                  <br />
                  <span>CPU</span>
                </div>
                <div className="data-box">
                  G1
                  <br />
                  <span>GPU</span>
                </div>
                <div className="data-box">
                  R1
                  <br />
                  <span>RAM</span>
                </div>
                <div className="data-box">
                  C2
                  <br />
                  <span>NET</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
      <>
        <Navbar />
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/exchanges" element={<Exchanges/>} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                <Route path="/crypto/:coinID" element={<CryptoDetails/>} />
                <Route path="/news" element={<News/>} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title level={5}>
              Nesting Doll
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
        <div id="main-hud">
          <div className="neo-container">
            <h3>Welcome</h3>
            {/* <Hud /> */}
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default App;
