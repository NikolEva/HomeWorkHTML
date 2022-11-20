let temp = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
let far = (9 / 5) * temp + 32;
alert(`Цельсий: ${temp}, Фаренгейт: ${far.toFixed(1)}`);
