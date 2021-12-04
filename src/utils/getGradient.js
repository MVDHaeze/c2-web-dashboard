function getGradient(ctx, chartArea) {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(5, chartArea.bottom, 5, chartArea.top);
    gradient.addColorStop(1, "#8589F9");
    gradient.addColorStop(0.3, "#B5B8FB");
    gradient.addColorStop(0, "#F7F7FF");
  }

  return gradient;
}

export default getGradient;
