function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
    // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    console.log(newSample);
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);  
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
     
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  
  // Create the buildChart function.
  function buildCharts(sample) {
    // Deliverable 1: 2. Use d3.json to load the samples.json file 
    d3.json("samples.json").then((data) => {
  
      // Create a variable that holds the samples array. 
      var samples = data.samples;
  
      // Create a variable that filters the samples for the object with the desired sample number.
      var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
  
      // Create a variable that filters the metadata array for the object with the desired sample number.
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    
      // Create a variable that holds the first sample in the array.
      var result = filteredSamples[0];
  
      // Create a variable that holds the first sample in the metadata array.
      var array = resultArray[0];
  
      // Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuID= result.otu_ids;
      var otuLabel = result.otu_labels;
      var values =result.sample_values;    
    
      // Create a variable that holds frequency.
  
      var wFreq = array.wfreq
  
      // Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order 
          var yticks = otuID.slice(0,10).map((id) => `OTU ${id}`).reverse();
  
      // Create the trace for the bar chart. 
      var barData = {
        x: values.slice(0,10).reverse(),
        y: yticks,
        hoverinfo: otuLabel,
        type: "bar",
        orientation: "h",
        backgroundColor: "rgb(192,189,189)"
  
      };
  
      // Plot the distribution of predicted vs actual values
  
      sns.histplot(y_test, color='blue', label='Actual', alpha=0.5)
      sns.histplot(y_pred, color='red', label='Predicted', alpha=0.5)
      plt.xlabel('Interest Rate')
      plt.title('Distribution of Predicted vs Actual Mortgage Interest Rates')
      plt.legend()
      plt.show()
  
      // Plot the coefficients of the linear regression model
      coefficients = pd.DataFrame({'Feature': X.columns, 'Coefficient': linreg.coef_})
      coefficients = coefficients.sort_values(by='Coefficient', ascending=False)
      sns.barplot(x='Coefficient', y='Feature', data=coefficients)
      plt.title('Coefficients of Linear Regression Model')
      plt.show()
      // Create the layout for the bar chart. 
      var barLayout = {
        title: "Top Rate from Predicted data",
        paper_bgcolor:"powderblue"
        };
  
      // Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", [barData], barLayout);
  
      // Create the trace for the bubble chart.
  
      var bubbleData = [{
        x: otuID,
        y: values,
        type : "bubble",
        text : otuLabel,
        hoverinfo: "x+y+text",
        mode: "markers",
        marker: {size: values, color: otuID, colorscale: "Earth"}
      }];
      
      // Create the layout for the bubble chart.
      var bubbleLayout =  {
        title: `Interest Rate per Income/Credit Score`,
          y:0.95,
          xaxis: {
            title: `OTU ID`
          },
          height: 480,
          width: 1100,
        hovermode: "closest",
        paper_bgcolor : "lightblue"
      };
      // Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
      // Create the trace for the gauge chart.
      var gaugeData = [
        { title:{text: 'Mortgage Rate Prediction<br>'},
        type: "indicator",
        value: wFreq,
        gauge: {
          axis: {range: [0,10], dtick:2},
          bar: {color: "black"},
          steps: [
            {range: [8,10], color: "red"},
            {range: [6,8], color: "orange"},
            {range: [4,6], color: "yellow"},
            {range: [2,4], color: "yellowgreen"},
            {range: [0,2], color: "green"}
          ]
        },
        mode: "gauge+number",
      }
    ];
      //Create the layout for the gauge chart.
      var gaugeLayout = {
        width :480,
        height:450,
        margin: {
          l: 100,
          r:100,
          b: 100,
          t: 100,
          pad: 50
        },
      };
      // Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  
    });
  }