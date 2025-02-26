import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [data, setdata] = useState([]);   
    const [loading, setLoading] = useState(true); 
    const [currPage, setCurrPage] = useState(1);
    const [pageItems, setPageItems] = useState([]);
    const itemsPerPage = 10;
    let totalPages = 0;

    useEffect(() => {        
        const fetchData = async () => {
            const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
            try {
                const response = await fetch(url);
                // console.log(response);
                const res = await response.json();
                // console.log(res);
                // { email, id, name, role}
                setdata(res);
            } catch (error){
                console.error("failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();                      
    }, []);
    // console.log("total data = ",data);

    totalPages = Math.ceil(data.length/itemsPerPage);
    // console.log("totalpages", totalPages);    

    const fetchCurrPage = (currPage) => {
        const startIdx = (currPage-1)*itemsPerPage;
        const endIdx = startIdx+itemsPerPage;
        const currData = data.slice(startIdx, endIdx);
        // console.log(currData);
        setPageItems(currData);
    }

    useEffect(() => {
        fetchCurrPage(currPage);
    }, [data,currPage]);
    
    const handlePrevious = () => {
        if(currPage>1){
            setCurrPage(currPage-1);
        }
    }
    const handleNext = () => {
        if(currPage<totalPages){
            setCurrPage(currPage+1);
        }
    }

  return (
    <div style={{
        textAlign: "center",
        alignContent: "center",
        maxWidth: "100vw",
    }}>
        <h2>Employee Data Table</h2>
        <div style={{
            // overflow: "hidden",
            width: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <table style={{
                border: "1px solid black",
                margin: "20px 0",
                height: "400px",
                width: "100%",
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
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: "left"}}>
                    {!loading ? (
                        pageItems.map(({ id, name, email, role }) => (
                            <tr key={id} style={{ 
                                margin: "5px 0", 
                                borderBottom: "1px solid #ddd",
                                transition: "background-color 0.3s" }} 
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f1f1f1"} 
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}>
                                <td style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>{id}</td>
                                <td style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>{name}</td>
                                <td style={{ padding: "5px", borderBottom : "1px solid #ddd" }}>{email}</td>
                                <td style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>{role}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>Loading data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
            <div style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",                
                textAlign:"center"
            }}>
                <button id="previous" onClick={handlePrevious} disabled={currPage === 1}
                    style={{
                        borderRadius: "4px",
                        backgroundColor: currPage === 1 ? "rgba(0, 128, 0, 0.5)" : "green", // Set opacity if on first page
                        color: "white",
                        padding: "10px 20px",
                        margin: "0 5px",
                    }}>Previous</button>
                <span style={{
                        borderRadius: "4px",
                        backgroundColor: "green",
                        color: "white",
                        margin: "0 20px",
                        padding: "10px 20px"
                    }}>{currPage} </span>
                <button id='next' onClick={handleNext} disabled={currPage === totalPages}
                style={{
                        borderRadius: "4px",
                        backgroundColor: currPage === totalPages ? "rgba(0, 128, 0, 0.5)" : "green", // Set opacity if on first page
                        color: "white",
                        padding: "10px 20px",
                        margin: "0 5px",
                    }}>Next</button>
            </div>
    </div>
  )
}

export default Pagination