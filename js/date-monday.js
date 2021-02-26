const dateMonday = document.getElementById('monday-date');

let getDate = () => {

    let date = new Date(),
    targetDay = 1, 
    targetDate = new Date(),
    delta = targetDay - date.getDay();

    if (delta >= 0) {
        targetDate.setDate(date.getDate() + delta)
    } else {
        targetDate.setDate(date.getDate() + 7 + delta)
    }

    let targetNumber = targetDate.getDate();
    let targetMonth = targetDate.getMonth();

    switch(targetMonth) {
        case 0: targetMonth = '01'; break;
        case 1: targetMonth = '02'; break;
        case 2: targetMonth = '03'; break;
        case 3: targetMonth = '04'; break;
        case 4: targetMonth = '05'; break;
        case 5: targetMonth = '06'; break;
        case 6: targetMonth = '07'; break;
        case 7: targetMonth = '08'; break;
        case 8: targetMonth = '09'; break;
        case 9: targetMonth = '10'; break;
        case 10: targetMonth = '11'; break;
        case 11: targetMonth = '12'; break;
    }

    let targetYear = targetDate.getFullYear();
    targetYear = targetYear.toString().substr(-2);

    return `
    <p>Распродажа до ${targetNumber}.${targetMonth}.${targetYear}</p>
    `;

}

dateMonday.innerHTML = getDate();