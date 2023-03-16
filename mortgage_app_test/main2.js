function calculate() {
    // get values from input boxes
    var a = Number(document.getElementById("creditScore").value);
    var b = Number(document.getElementById("loanTerm").value);
    var c = Number(document.getElementById("downPayment").value);
    var d = Number(document.getElementById("loanAmount").value);
    

    // calculate result
    var result = 14.0 +(a*-0.0058) + (b*0.016) + (c*0.-000005) + (d*0.0000005);
    
    // display result
    document.getElementById("result").innerHTML = result.toFixed(2);

    var gaugeData = [        
        {
          type: "indicator",
          mode: "gauge+number",
          value: result,
          title: {
            text: "Interest Rate",
            font: { size: 20 }
          },
          gauge: {
            axis: {
              range: [0, 10],
              tickvals: [0, 2, 4, 6, 8, 10],
              ticktext: ['0', '2', '4', '6', '8', '10'],
              tickwidth: 2,
              tickcolor: "red"
            },
            bar: { color: "darkblue" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange" },
              { range: [4, 6], color: "yellow" },
              { range: [6, 8], color: "lightgreen" },
              { range: [8, 10], color: "darkgreen" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: result
            }
          }
        }
      ];
      
        var gaugeLayout = {
          width: 1000,
          height: 1000,
          margin: {
            l: 200,
            r: 200,
            t: 50,
            b: 50
          }
        };
        
      Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

function reset() {
    document.getElementById("creditScore").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("downPayment").value = "";
    document.getElementById("loanAmount").value = "";
    document.getElementById("result").innerHTML="";
}


