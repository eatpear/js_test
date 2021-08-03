function randomNum(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

var data = [];
var data_num = 100;
var dataType = ['休闲', '舒适', '运动', '圆领', '立领'];
var dataSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL'];
var dataColor = ['红', '橙', '黄', '绿', '青', '蓝', '紫'];
for (let i = 0; i < data_num; i++) {
    let data_obj = {
        data_id: i,
        data_name: '衬衫',
        data_type: dataType[randomNum(0, dataType.length - 1)],
        data_size: dataSize[randomNum(0, dataSize.length - 1)],
        data_price: randomNum(49, 399),
        data_color: dataColor[randomNum(0, dataColor.length - 1)],
    }
    data.push(data_obj);
}