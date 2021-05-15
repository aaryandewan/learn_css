import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col, Container } from "react-bootstrap";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 20],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio: false,
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
        >
          Github Source
        </a>
      </div>
    </div>
    {/* <div style={{ height: "400px", width: "600px" }}> */}
    <Container>
      <Row
        className="justify-content-around"
        style={{ backgroundColor: "pink" }}
      >
        <Col className="col-12 col-md-6">
          <Line
            data={data}
            // options={{ maintainAspectRatio: false }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              maintainAspectRatio: true,
            }}
          />
        </Col>
        <Col className="col-12 col-md-6">
          <Line
            data={data}
            // options={{ maintainAspectRatio: false }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              maintainAspectRatio: true,
            }}
          />
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "white" }}
        className="justify-content-center mt-5"
      >
        <Col className="col-10" style={{ backgroundColor: "white" }}>
          <div
            style={{
              height: "50vh",
              //   width: "100vh",
              backgroundColor: "",
            }}
          >
            <Line
              data={data}
              // options={{ maintainAspectRatio: false }}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                maintainAspectRatio: true,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
    {/* </div> */}
  </>
);

export default LineChart;
