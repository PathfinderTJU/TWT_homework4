    /*
     *Homework4 of Front End
     *@author: Xingyu Liu
     *@time: 2019.4.13 22:47(GMT+8)
     */
    
"use script"

    //1. 至少三种方法遍历数组arr = [1, 2, "This", 1.1]
    var arr = [1, 2, "This", 1.1];
    //方法1
    function traverse1(arr) {
        for (var x of arr){
            console.log(x);
        }
    }
    //测试
    traverse1(arr);

    //方法2
    function traverse2(arr) {
       arr.forEach(element => {
           console.log(element);
       });
    }

    //测试
    traverse2(arr);

    //方法3
    function traverse3(arr){
        arr.map(function(element){
            console.log(element);
        });
    }

    //测试
    traverse3(arr);

    //2. 每隔一秒，打印当前时间，格式：月份+日期+小时+分钟+秒数
    function printTime(){
        setInterval(function(){
            let d = new Date();
            console.log(d.getMonth()+1 + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        }, 1000);
    }

    //测试
    printTime();

    /* A better answer: Don't use setInterval. It takes a lot of heap space.
     * function foo(){
     *   var date = new Date;
     *   console.log(date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
     *   setTimeout(foo, 1000);
     * }
     *
     * foo();
     */

    //3. 反转字符串
    var s = 'xiaoming';

    function reverseString(str){
        var temp = str.split("");
        var result = str[str.length-1];
        for(let b = str.length-2 ; b >= 0 ; b--){
            result += temp[b];
        }
        console.log(result);
    }
    
    //测试
    reverseString(s);

    //4. 数组去重
    var arr = [1, 1, 2, 6, 8, 5, 6];

    function removeDuplicate(arr) {
        var s = new Set(arr);
        arr = Array.from(s);
        console.log(arr);
    }

    ///测试
    removeDuplicate(arr);

    //5. 随机排序
    var arr = [1, 2, 3, 4, 5];

    function shuffle (arr) {
        arr.sort(function(x, y){
            let a = (new Date()).getTime();
            console.log(a);
            if (a % 2 === 0){
                return 1;
            }else{
                return -1;
            }
        });
        console.log(arr);
    }
    
    //测试
    shuffle(arr);

    //6. 不用循环，打印3的倍数
    //递归
    function print3 (x) {
        if(x % 3 === 0){
            console.log(x);
        }
        x++;
        if(x === 101){
            return;
        }else{
            print3(x);
        }
    }
    
    //测试
    print3 (1);

    //7. 将一个对象以Key: Value形式输出（不输出以下划线开头的属性)
    var xiaoming = {
        name: 'xiaoming',
        age: 18,
        preference: {
            food: 'beaf',
            sport: 'football'
        },
        _secret: 'homo'
    };

    function printObject(Obj){//使用for...in循环时使用hasOwnProperty()方法判断i是否为对象的属性而不是继承的属性
        for(var i in Obj) {
            var value = Obj[i];
            if (Obj.hasOwnProperty(i) && i[0] !== "_"){
                if (Object.prototype.toString.call(value).slice(8,-1) === "Object"){
                    printObject(value);
                }else{
                    console.log(i,":",value);
                }
            }
        } 
    }

    //测试
    printObject(xiaoming);

    //8. 过滤数组对象
    const data = [
        {
          id: 1,
          name: 'john',
          age: 24
        },
        {
          id: 2,
          name: 'mike',
          age: 50
        },
        {
            id: 2,
            name: 'Liu',
            date: "1999-02-8",
            age: 25
        }
          
      ];

    //要判断是否key为一个对象，用typeof
    function reducedFilter(data, keys, fn) {
        var result = [];
        data.filter(fn).forEach(function(element){
            var obj = {};
            keys.forEach(function(value){
                obj[value] = element[value];
            })
            result.push(obj);
        })
        return result;
    }
    
    //测试
    reducedFilter(data, ['id', 'name'], item => item.age > 24); 
    