'use client';
import classes from "./Result.module.css";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Button from "../Button/Button";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Result = ({ correct, wrong, score }) => {
  const data = [
    { name: "Correct", value: correct },
    { name: "Wrong", value: wrong },
  ];

  console.log("Correct:", correct, "Wrong:", wrong);

  const COLORS = ["#fcd12a", "darkgray"];

  const columns = [
    { field: 'id', headerName: 'Test No.', width: 90 },
    { field: 'category', headerName: 'Category', width: 120 },
    { field: 'score', headerName: 'Score', width: 120 },
    { field: 'time', headerName: 'Time', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const prev_res = localStorage.getItem('my_Quiz_Data');

    if (prev_res) {
      try {
        const parsed = JSON.parse(prev_res);
        if (Array.isArray(parsed)) {
          const formattedRows = parsed.map((item, index) => ({
            id: item.id || index + 1,
            category: item.category,
            score: item.score+'/10',
            time: item.time,
            date: item.date,
          }));
          setRows(formattedRows);
        }
      } catch (e) {
        console.error('Error parsing quiz data:', e);
      }
    }
  }, []);

  return (
    <Container style={{ width: "100%", height: "320px" }}>
      <h2 className={classes.score}>Your Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={classes.ratio}>
        <h1>
          <span className={classes.sc}>{score}</span><span className={classes.tot}>/10</span>
        </h1>
      </div>
      <div className={classes.btn_main}>
        <div>
          <Link href="/">
            <Button text="Return to home page" />
          </Link>
        </div>
        <div>
          <Link href="/category">
            <Button text="Take another QUIZ!" />
          </Link>
        </div>
      </div>
      <Row style={{marginLeft: "22%", marginTop: "50px"}}>
        <Box  sx={{ height: 400, width: '70%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Row>
    </Container>
  );
};

export default Result;
