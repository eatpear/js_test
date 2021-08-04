function Game(map, snake, food) {
    this.map = map;
    this.snake = snake;
    this.food = food;
    this.flag = false;           //游戏是否结束的标志
    this.init();
}

Game.prototype.init = function () {
    this.start();
    this.bindEvent();
};

//绘制蛇的方法
Game.prototype.renderSnake = function () {
    let xyArr = this.snake.xyArr;
    let erWeiArr = this.map.erWeiArr;

    //遍历蛇的坐标数组与地图的所有div比较坐标，将坐标匹配的div设置背景色
    xyArr.forEach((element, index, self) => {
        let { x, y } = element;                         //x代表列，y代表行
        if (index !== self.length - 1) {
            erWeiArr[y][x].style.backgroundColor = "#00FF99";
        } else {
            erWeiArr[y][x].style.backgroundColor = "#6633FF";
        }

    });
};

//清屏方法,遍历地图坐标的二维数组将背景色设置为透明
Game.prototype.clear = function () {
    let erWeiArr = this.map.erWeiArr;
    erWeiArr.forEach(value => {
        value.forEach(element => {
            element.style.background = "transparent";
        });
    });
};

//游戏开始方法
Game.prototype.start = function () {
    //游戏开始
    this.flag = true;
    this.renderSnake();
    //开启定时器
    this.timer = setInterval(() => {
        this.snake.move();          //移动
        this.checkSnake();          //判断是否碰到自己
        this.checkEatFood();        //判断是否吃到食物
        if (this.flag) {
            this.clear();
            this.renderSnake();
            this.renderFood();
        }
    }, 200);
}

//绑定键盘监听事件
Game.prototype.bindEvent = function () {
    document.onkeydown = (e) => {
        switch (e.keyCode) {
            case 37:
            case 38:
            case 39:
            case 40:
                // 让蛇更改方向 而不是改变蛇的方向
                this.snake.changeDirection(e.keyCode);
                break;
        }
    }
}

//检测是够碰到自己的方法
Game.prototype.checkSnake = function () {
    // 获取头的坐标 
    var snakeHead = this.snake.xyArr.slice(-1)[0];
    // 获取身体的坐标数组 
    var snakeBody = this.snake.xyArr.slice(0, -1);

    var isEatSelf = snakeBody.some(value => {
        return value.x === snakeHead.x && value.y === snakeHead.y;
    })
    // console.log(isEatSelf);

    // 如果吃到了自己 就 停止游戏
    isEatSelf && this.gameover();
}

//游戏结束方法
Game.prototype.gameover = function () {
    clearInterval(this.timer);
    this.flag = false;
    this.clear();
    let again = confirm("游戏结束是否再来一局？");
    if (again) {
        this.flag = true;
        this.snake.xyArr = [
            {
                x: 4,
                y: 5
            },
            {
                x: 5,
                y: 5
            }, {
                x: 6,
                y: 5
            }, {
                x: 7,
                y: 5
            }, {
                x: 8,
                y: 5
            },
        ];
        this.snake.direction = 39;
        this.snake.lock = true;
        this.food.x = x;
        this.food.y = y;
        this.init();
    }
}

//渲染食物方法
Game.prototype.renderFood = function () {
    // 获取食物的坐标
    var { x, y } = this.food;
    // 获取二维数组
    var erWeiArr = this.map.erWeiArr;
    erWeiArr[y][x].style.background = "gold"
}

//检查是否吃到食物
Game.prototype.checkEatFood = function () {
    // 获取蛇头
    var snakeHead = this.snake.xyArr.slice(-1)[0];
    // 获取食物
    var { x, y } = this.food;
    if (snakeHead.x === x && snakeHead.y === y) {
        // 蛇增长
        this.snake.growUp();
        // 食物消失重置
        this.resetFood();
    }
}

//食物重置方法
Game.prototype.resetFood = function () {
    // 随机一个x
    var x = parseInt(Math.random() * this.map.col);
    // 随机一个y
    var y = parseInt(Math.random() * this.map.row);
    // 检测这个x和y是否和蛇重合 
    var isChonghe = this.snake.xyArr.some(value => value.x === x && value.y === y);
    if (isChonghe) {
        this.resetFood();
        return;
    }
    this.food.x = x;
    this.food.y = y;
}
