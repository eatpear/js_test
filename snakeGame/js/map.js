function Map(dom, row, col) {
    this.dom = dom;
    this.row = row;
    this.col = col;
    this.erWeiArr = [];
    this.draw();
}

Map.prototype.draw = function () {
    for (let i = 0; i < this.row; i++) {
        let arr = [];
        let mapRow = document.createElement('div');
        mapRow.style.display = 'flex';
        for (let j = 0; j < this.col; j++) {
            let mapCol = document.createElement('div');
            mapCol.style.flex = 1;
            mapCol.style.height = parseInt(getComputedStyle(this.dom).height) / this.row + 'px';
            mapCol.style.borderRight = '1px solid #ccc';
            mapCol.style.borderBottom = '1px solid #ccc';
            //第一行加上上边框
            if (i === 0) {
                mapCol.style.borderTop = '1px solid #ccc';
            }
            //第一列加上左边框
            if (j === 0) {
                mapCol.style.borderLeft = '1px solid #ccc';
            }
            arr.push(mapCol);
            mapRow.appendChild(mapCol);
        }
        this.erWeiArr.push(arr);
        this.dom.appendChild(mapRow);
    }
}