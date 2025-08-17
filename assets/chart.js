// Script para el gráfico de barras de los productos más vendidos en el dashboard.
// Espera a que el DOM esté listo para verificar la existencia de la tabla.
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene la tabla y el canvas donde se dibujará el gráfico.
  const table = document.getElementById('top-products-table');
  const canvas = document.getElementById('top-products-chart');
  if (!table || !canvas) return;
  const ctx = canvas.getContext('2d');
  //Extrae los datos de la tabla para generar el gráfico con la información.
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  const productos = rows.map(row => row.children[0].textContent);
  const cantidades = rows.map(row => Number(row.children[2].textContent));
  const total = productos.length;
  //Tamaño de las barras.
  //Espacio a los lados del gráfico.
  const chartPadding = 35;
  //Ancho del área de las barras.
  const availableWidth = canvas.width - chartPadding * 2;
  //Ancho de la barra y espacio entre ellas.
  const barWidth = Math.min(40, availableWidth / (total * 2.0));
  const gap = total > 1 ? (availableWidth - (barWidth * total)) / (total - 1) : 0;
  //Altura máxima de las barras.
  const maxBarHeight = 110;
  const maxCantidad = Math.max(...cantidades) || 1;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "13px Arial";
  productos.forEach((producto, i) => {
    //Calcula la posición de cada barra.
    const x = chartPadding + i * (barWidth + gap);
    //Altura según la cantidad.
    const barHeight = (cantidades[i] / maxCantidad) * maxBarHeight;
    // Estilo de la barra.
    ctx.fillStyle = "#FFD600";
    ctx.fillRect(x, canvas.height - barHeight - 40, barWidth, barHeight);
    // Cantidad encima de la barra.
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(cantidades[i], x + barWidth / 2, canvas.height - barHeight - 48);
    // Nombre del producto y estilo.
    ctx.save();
    ctx.font = "10px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(producto, x + barWidth / 2, canvas.height - 10);
    ctx.restore();
  });
});