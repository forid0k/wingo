function getPrediction() {
    const colors = ["Green", "Violet", "Red"];
    let predictions = [];

    colors.forEach(color => {
        let nums = [];
        if(color === "Green") nums = getRandomNumbers(0,4,3);
        else if(color === "Violet") nums = getRandomNumbers(5,8,2);
        else nums = getRandomNumbers(0,9,3);

        const bigSmall = Math.random() > 0.5 ? "Big" : "Small";
        predictions.push({color: color, numbers: nums, bet: bigSmall});
    });

    return predictions;
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

    data.forEach(item => {
        const colorDiv = document.createElement('div');
        colorDiv.innerHTML = `<h3 class="${item.color.toLowerCase()}">${item.color} - ${item.bet}</h3>`;
        item.numbers.forEach(num => {
            const bubble = document.createElement('span');
            bubble.className = 'bubble';
            bubble.textContent = num;
            colorDiv.appendChild(bubble);
        });
        container.appendChild(colorDiv);
    });
}
