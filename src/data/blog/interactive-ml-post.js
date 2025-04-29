// src/data/blog/interactive-ml-post.js
const post = {
    id: "interactive-ml-post",
    title: "Interactive Machine Learning Concepts",
    publication: "Personal Blog, 2025",
    date: "2025-04-28", // Make sure this is a valid date string in YYYY-MM-DD format
    summary: "Explore machine learning concepts with interactive visualizations including linear regression models.",
    content: `
  # Interactive Machine Learning Concepts
  
  ## Introduction
  
  Machine learning doesn't have to be a black box. In this post, we'll explore some fundamental concepts with interactive demonstrations that help build intuition.
  
  ## Understanding Linear Regression
  
  Linear regression is one of the most basic but powerful machine learning algorithms. It attempts to model the relationship between variables by fitting a linear equation to the observed data.
  
  Here's how a simple linear regression works:
  
  \`\`\`javascript
  // Simple linear regression example
  const xs = [1, 2, 3, 4, 5];
  const ys = [2, 4, 5, 4, 5];
  
  // Calculate the mean of an array
  const mean = arr => arr.reduce((a, b) => a + b) / arr.length;
  
  // Calculate slope and intercept
  const xMean = mean(xs);
  const yMean = mean(ys);
  const slope = xs.map((x, i) => ({ x, y: ys[i] }))
                 .reduce((sum, point) => sum + (point.x - xMean) * (point.y - yMean), 0) / 
                 xs.reduce((sum, x) => sum + Math.pow(x - xMean, 2), 0);
  const intercept = yMean - slope * xMean;
  
  console.log(\`y = \${slope.toFixed(2)}x + \${intercept.toFixed(2)}\`);
  
  // Predict values
  const predictions = xs.map(x => slope * x + intercept);
  \`\`\`
  
  The output would be: y = 0.60x + 2.00
  
  ### Interactive Linear Regression Demo
  
  Try adjusting the slope and intercept parameters below to see how they affect the fit of the line to the data points. Notice how the total error changes as you move closer to or further from the optimal solution.
  
  <!-- LINEAR_REGRESSION -->
  
  The goal of linear regression is to find the values of slope and intercept that minimize the total error. In practice, algorithms like gradient descent are used to find these optimal parameters automatically.
  
  ## Building Interactive Interfaces
  
  Interactive user interfaces allow us to experiment with parameters in real-time, building intuition for complex systems.
  
  ### Interactive Counter Example
  
  Below is a simple counter that demonstrates React state management:
  
  <!-- COUNTER -->
  
  This counter is built using React's \`useState\` hook, which allows components to maintain state across renders.
  
  ### Interactive Color Picker
  
  Here's another example showing a simple color picker:
  
  <!-- COLOR_PICKER -->
  
  ## Conclusion
  
  Interactive elements make learning complex concepts much easier. By playing with parameters and seeing results in real-time, you can build intuition for how algorithms work under the hood.
  
  Try adjusting the parameters in the demos above to see how they affect the outcomes. This kind of hands-on exploration is invaluable for developing a deep understanding of machine learning concepts.
    `
  };
  
  export default post;