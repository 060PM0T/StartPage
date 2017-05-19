//расчет длинны масива
Object.size = function(obj) {
    var size = 0, key;
    // Бегаем по ключам и считаем их
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    // Возвращаем размер
    return size;
};

//Длинна массива
var sizeArrayLink = Object.size(arrayLink);

// Вставка background
document.body.style.backgroundImage = background.back;

// Ссылки
var colums = (sizeArrayLink / 5) + 1;
var stringLong = -4;
var stringShort = 0;
var i = 1;

// Рендер строк.
for (var j=1; j <= colums; j++) {
    var divLine = document.createElement('div');
    divLine.className = 'DivLine' + ' ' + j;
    divLine.id = j;
    box.appendChild(divLine);

    // Наполнение строк.
    if (j % 2 !== 0) {
        stringLong = stringLong + 9;
        for (; i <= stringLong; i++) {
            if (i <= stringLong && i <= sizeArrayLink) {
                var divLink = document.createElement('div');
                divLink.className = 'DivLink' + ' ' + i;
                divLink.style.backgroundImage = arrayLink[i].img;
                var link = document.createElement('a');
                link.className = 'link' + ' ' + i;
                link.innerHTML = arrayLink[i].title;
                link.href = arrayLink[i].link;
                divLink.appendChild(link);
                thisDivLine = document.getElementById(j);
                thisDivLine.appendChild(divLink);
            } 
        }
    } else {
        stringShort = stringShort + 9;
        for (; i <= stringShort; i++) {
            if (i <= stringShort && i <= sizeArrayLink) {
                var divLink = document.createElement('div');
                divLink.className = 'DivLink' + ' ' + i;
                thisDivLine = document.getElementById(j);
                thisDivLine.style.marginLeft = '100px'
                thisDivLine.appendChild(divLink);
            } 
        }
    }
}