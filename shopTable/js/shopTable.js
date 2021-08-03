var tbody = document.querySelector("tbody");

//初始化函数
function init() {
    render();
    changeColor();
}
init();

//渲染函数
function render() {
    tbody.innerHTML = data.map(element => {
        return `<tr><td>${element.data_name}</td><td>${element.data_type}</td><td>${element.data_size}</td><td>${element.data_price}</td><td>${element.data_color}</td>
        <td><button class = "up" data-id = ${element.data_id}>上移</button><button class = "down" data-id = ${element.data_id}>下移</button></td></tr>`;
    }).join("");
}

//隔行变色
function changeColor() {
    let trs = tbody.querySelectorAll("tr");
    let trsArr = Array.from(trs);
    trsArr.forEach((value, index) => {
        if (index % 2 === 0) {
            value.style.background = "#00FF66";
        } else {
            value.style.background = "#FFCC66";
        }
    });
}

//上移或者下移，修改data数据
tbody.addEventListener('click', (e) => {

    if (e.target.className === 'up') {
        let dataId = +e.target.getAttribute('data-id');
        if (dataId === 0) {
            alert('已经是列表第一件商品了，无法上移');
            return;
        }
        data[dataId].data_id--;
        data[dataId - 1].data_id++;
        [data[dataId], data[dataId - 1]] = [data[dataId - 1], data[dataId]];
        init();
    }

    if (e.target.className === 'down') {
        let dataId = +e.target.getAttribute('data-id');
        if (dataId === data.length - 1) {
            alert('已经是列表最后一件商品了，无法下移');
            return;
        }
        data[dataId].data_id++;
        data[dataId + 1].data_id--;
        [data[dataId], data[dataId + 1]] = [data[dataId + 1], data[dataId]];
        init();
    }
});




