import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import  ReactDOM  from "react-dom";
import axios from "axios";
    

function ScoringChart() {    
      // 데이터 반영 전 차트(return문이 useEffect보다 먼저 실행되기 때문에 에러 방지용)
      const initialChart = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                type: "datetime",
            },
            title: {
                text: "득점 현황",
            },
        },
        series: [
            {
                name: "수익률",
            }
        ],
      }

      const [chartState, setChartState] = useState(initialChart);
    
      let data;
      useEffect(()=> {
          axios
          .get("http://127.0.0.1:5000/api/v1/player", null)
          .then((res) => {
              console.log(res.data);
              const playerData = res.data;
              console.log(playerData[0]);
            
              const name = [];
              const score= [];
              const assist = [];
              for (let i = 0; i< playerData.length; i++) {
                name.push(playerData[i].name);
                score.push(playerData[i].goal);
                assist.push(playerData[i].assist);
              }

              console.log(name, score, assist);
              
              const temp = {
                options: {
                    chart: {
                        id: "basic-bar",
                        events: {
                                
                        }   
                    },
                    xaxis: {
                        categories: name,
                        type: String,
                    },
                    title: {
                        text: "득점/어시스트",
                    },
                    subtitle: {
                       
                    }
                },
                series: [{
                        name: "득점",
                        data: score,
                    }, {
                        name: "어시스트",
                        data: assist, 
                    }
                ],
                tooltip: {
                    intersect: true,
                    shared: true,
                    marker : {
                        show: true,
                    }
                }
              };
              setChartState(temp);
        });
      }, []);
    
      const style = {
        // backgroundColor: "#2B2B34",
        // borderRadius: "20px",
      }
      
      return (
        <>
            <div style={style}>
                <Chart
                    options={chartState.options}
                    series={chartState.series}
                    type="bar"
                    width="500"
                />
            </div>
        </>
      )
      
}
    

export default ScoringChart;