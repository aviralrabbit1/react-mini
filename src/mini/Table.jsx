import React, { useState, useEffect } from 'react'

const Table = () => {
  
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]

  const [sortedData, setsortedData] = useState(data);
  const dateSort = () => {
    const sorted = [...sortedData].sort((a, b) => new Date(a.date) - new Date(b.date));
    setsortedData(sorted);
  }
  const viewsSort = () => {
    const sorted = [...sortedData].sort((a, b) => a.views - b.views);
    setsortedData(sorted);
  }
  useEffect(() => {

  }, [sortedData])

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }}>
        <h1>Date and Views Table</h1>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }}>
            <button onClick={dateSort}>Sort by Date</button>
            <button onClick={viewsSort}>Sort by Views</button>
        </div>
        <table style={{
                border: "1px solid black",
                margin: "20px 0",
                height: "400px",
                width: "50%",
                // padding: "20px"
                tableLayout: "fixed",
        }}>
          <thead style={{
                    border: "1px solid black",
                    backgroundColor: "green",
                    borderCollapse: "collapse",
                    color: "white",
                }}>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left"}}>
            {
              sortedData.map(({date, views, article}, id) => (
                <tr key={id} style={{ 
                  margin: "5px 0", 
                  borderBottom: "1px solid #ddd",
                  transition: "background-color 0.3s" }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f1f1f1"} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}>
                  <td style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>{date}</td>
                  <td style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>{views}</td>
                  <td style={{ padding: "5px", borderBottom : "1px solid #ddd" }}>{article}</td>
              </tr>
              ))
            }
          </tbody>
        </table>

    </div>
  )
}

export default Table