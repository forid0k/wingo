function getPrediction() {
    const colors = ["Green", "Violet", "Red"];
    // Randomly select one color as the prediction
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Random numbers based on color
    let nums = [];
    if(color === "Green") nums = getRandomNumbers(0,4,3);
    else if(color === "Violet") nums = getRandomNumbers(5,8,3);
    else nums = getRandomNumbers(0,9,3);

    // Random Big/Small
    const bigSmall = Math.random() > 0.5 ? "Big" : "Small";

    return {color: color, numbers: nums, bet: bigSmall};
}

function getRandomNumbers(min,max,count){
    let arr = [];
    while(arr.length < count){
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!arr.includes(n)) arr.push(n);
    }
    return arr;
}

function showPrediction(){
    const data = getPrediction();
    const container = document.getElementById('predictions');
    container.innerHTML = '';

    const colorDiv = document.createElement('div');
    colorDiv.innerHTML = `<h3 class="${data.color.toLowerCase()}">${data.color} - ${data.bet}</h3>`;
    data.numbers.forEach(num => {
        const bubble = document.createElement('span');
        bubble.className = 'bubble';
        bubble.textContent = num;
        colorDiv.appendChild(bubble);
    });

    container.appendChild(colorDiv);
}
