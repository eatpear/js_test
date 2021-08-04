function Snake(xyArr) {
    this.xyArr = xyArr;
    this.direction = 39;
    this.lock = true;
}

//蛇移动方法
Snake.prototype.move = function () {
    //将数组头部也就是蛇的尾部删掉
    this.xyArr.shift();
    let oldHead = this.xyArr.slice(-1)[0];
    //根据运动方向给蛇的头部也就是数组尾部添加新的坐标对象
    let newHead = {
        x: oldHead.x,
        y: oldHead.y
    };
    switch (this.direction) {
        case 37:
            newHead.x--;
            if (newHead.x < 0) {
                newHead.x = col - 1;
            }
            break;
        case 38:
            newHead.y--;
            if (newHead.y < 0) {
                newHead.y = row - 1;
            }
            break;
        case 39:
            newHead.x++;
            if (newHead.x > col - 1) {
                newHead.x = 0;
            }
            break;
        case 40:
            newHead.y++;
            if (newHead.y > row - 1) {
                newHead.y = 0;
            }
            break;
    }
    this.xyArr.push(newHead);
    this.lock = true;
}

Snake.prototype.changeDirection = function (keyCode) {
    if (Math.abs(this.direction - keyCode) === 2 || !this.lock) {
        return;
    }
    this.direction = keyCode;
    //加锁
    this.lock = false;
}

//蛇身体增长方法
Snake.prototype.growUp = function () {
    this.xyArr.unshift(this.xyArr[0]);
}