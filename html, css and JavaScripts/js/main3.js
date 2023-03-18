function calculate() {
  // get values from input boxes
  var a = Number(document.getElementById("creditScore").value);
  var b = Number(document.getElementById("loanTerm").value);
  var c = Number(document.getElementById("downPayment").value);
  var d = Number(document.getElementById("loanAmount").value);

  // calculate result
  var result = 14.0 + (a * -0.0058) + (b * 0.016) + (c * -0.000005) + (d * 0.0000005);

  // display result
  document.getElementById("result").innerHTML = result.toFixed(2);

  var gaugeData = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: result,
      title: {
        text: "Interest Rate",
        font: { size: 24 },
      },
      gauge: {
        axis: {
          range: [0, 15],
          tickvals: [0, 3, 6, 9, 12, 15],
          ticktext: ['0', '3', '6', '9', '12', '15'],
          tickwidth: 2,
          tickcolor: "red",
        },
        bar: { color: "darkblue" },
        bgcolor: "lightblue",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
            { range: [0, 3], color: "green" },
            { range: [3, 6], color: "lightgreen" },
            { range: [6, 9], color: "yellow" },
            { range: [9, 12], color: "orange" },
            { range: [12, 15], color: "red" },
          ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: result,
        },
      },
    },
  ];

  var gaugeLayout = {
    width: 400,
    height: 400,
    margin: {
      l: 50,
      r: 50,
      t: 50,
      b: 50,
    },
  };

  Plotly.react("gauge", gaugeData, gaugeLayout, { responsive: true });
}

function reset() {
  document.getElementById("creditScore").value = "";
  document.getElementById("loanTerm").value = "";
  document.getElementById("downPayment").value = "";
  document.getElementById("loanAmount").value = "";
  document.getElementById("result").innerHTML = "";

  var gaugeData = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: result,
      title: {
        text: "Interest Rate",
        font: { size: 20 },
      },
      gauge: {
        axis: {
          range: [0, 15],
          tickvals: [0, 3, 6, 9, 12, 15],
          ticktext: ['0', '3', '6', '9', '12', '15'],
          tickwidth: 2,
          tickcolor: "red",
        },
        bar: { color: "darkblue" },
        bgcolor: "lightblue",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 3], color: "green" },
          { range: [3, 6], color: "lightgreen" },
          { range: [6, 9], color: "yellow" },
          { range: [9, 12], color: "orange" },
          { range: [12, 15], color: "red" },
        ],
        threshold: {
          line: { color: "red", width: 6 },
          thickness: 0.75,
          value: result,
        },
      },
    },
  ];
  
  var gaugeLayout = {
    width: 400,
    height: 400,
    margin: {
      l: 50,
      r: 50,
      t: 50,
      b: 50,
    },
  };
  
  Plotly("gauge", gaugeData, gaugeLayout);
}
