var arrayLink = {
    '1': {
        'title': 'VK',
        'link': '#',
        'img': "url('img/1.jpg')"
    },
    '2': {
    'title': 'VK',
    'link': '#',
    'img': "url('img/1.jpg')"
    }
};

var background = {
    'back': "url('img/back.jpg')"
}

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