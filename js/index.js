// Расчет длинны масива.
Object.size = function(obj) {
    var size = 0, key;
    // Бегаем по ключам и считаем их.
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    // Возвращаем размер.
    return size;
};

//Длинна массива.
var sizeArrayLink = Object.size(arrayLink);

// Вставка background.
document.body.style.backgroundImage = background.back;

// Расчет длинны колонки.
var colums = (sizeArrayLink / 5) + 1;
// Криво, значения для расчета длины строк.
var stringLong = -4;
var stringShort = 0;
// Начальное значение для счетчика массива, вынесенно для сохранения его значения.
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
                // Блок.
                var divLink = document.createElement('div');
                divLink.className = 'DivLink' + ' ' + i;
                divLink.style.backgroundImage = arrayLink[i].img;
                // Ссылка.
                var link = document.createElement('a');
                link.className = 'link' + ' ' + i;
                link.title = arrayLink[i].title;
                link.href = arrayLink[i].link;
                // Добавление ссылки в блок.
                divLink.appendChild(link);
                // Отображение.
                thisDivLine = document.getElementById(j);
                thisDivLine.appendChild(divLink);
            } 
        }
    } else {
        stringShort = stringShort + 9;
        for (; i <= stringShort; i++) {
            if (i <= stringShort && i <= sizeArrayLink) {
                // Блок.
                var divLink = document.createElement('div');
                divLink.className = 'DivLink' + ' ' + i;
                divLink.style.backgroundImage = arrayLink[i].img;
                // Ссылка.
                var link = document.createElement('a');
                link.className = 'link' + ' ' + i;
                link.title = arrayLink[i].title;
                link.href = arrayLink[i].link;
                // Добавление ссылки в блок.
                divLink.appendChild(link);
                // Отображение.
                thisDivLine = document.getElementById(j);
                // Отступ для второй линии.
                thisDivLine.style.marginLeft = '100px';
                thisDivLine.appendChild(divLink);
            } 
        }
    }
}