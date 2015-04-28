

var divs = document.querySelectorAll('div.row.result');
divs = Array.prototype.slice.call(divs);
console.log(divs);
var obj = divs.map(function (div, index) {
    return {
        title: div.querySelector('.jobtitle').textContent.trim(),
        company: div.querySelector('.company').textContent.trim(),
        location: div.querySelector('.location').textContent.trim(),
        description: div.querySelector('td.snip :nth-child(1)').textContent.trim()
    };
});

console.log(obj);

var element = document.createElement('a');
element.href = 'data:text/plain;utf-8,' + JSON.stringify(obj);
element.download = 'helloworld.txt';
element.innerHTML = 'Link to google - inserted by the program ... ';
document.body.appendChild(element);

