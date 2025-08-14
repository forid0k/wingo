function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPrediction() {
  // শুধু Green বা Red
  const colors = ["Green", "Red"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // সংখ্যার রেঞ্জ: Green → 0–4, Red → 0–9
  const number = color === "Green" ? randInt(0, 4) : randInt(0, 9);

  // Big বা Small—র‍্যান্ডম
  const size = Math.random() < 0.5 ? "Big" : "Small";

  return { color, size, number };
}

function showPrediction() {
  const { color, size, number } = getPrediction();

  const container = document.getElementById("predictions");
  container.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <h2 class="${color.toLowerCase()}">${color}</h2>
    <h3>${size}</h3>
    <span class="bubble">${number}</span>
  `;

  container.appendChild(wrap);
}
