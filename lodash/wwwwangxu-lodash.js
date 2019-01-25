var wwwwangxu = function() {
    function chunk(ary, size = 1) {
        let res = [];
        let len = ary.length;
        let j = 0;
        let k;
        res[j] = [];
        for (let i = 0; i < len; i++) {
            k = res[j].length;
            if (k < size) {
                j = j;
            } else {
                j++;
                res[j] = [];
            }
            res[j].push(ary[i]);
        }
        return res;
    }
    
    function compact(ary) {
        let len = ary.length;
        let res = [];
        for (let i = 0; i < len; i++) {
            if (ary[i]) {
                res.push(ary[i]);
            }
        }
        return res;
    }

    function difference(ary1, ...ary2) {
        let res = [];
        let ary = [].concat(...ary2);    //将多个数组合并成一个数组
        let set = new Set(ary);
        for (let val of ary1) {
            if (!set.has(val)) {
                res.push(val);
            }
        }
        return res;
    } 

    function differenceBy(ary1, ...ary2) {
        let res = [];
        let ite = ary2[ary2.length - 1];
        let fn;
        if (Array.isArray(ite)) {
            //若为数组，则处理函数为一一映射
            fn = it => it;
        } else if (typeof ite == "function") {
            fn = ite;
            ary2.length--; 
        } else {
            //若为字符串，则映射为数组中的对象的属性；
            fn = it => it[ite];
            ary2.length--;
        }
        let set = new Set();
        ary2.forEach(ary => {
            ary.forEach(val => {
                set.add(fn(val))})
        })
        for (let val of ary1) {
            if (!set.has(fn(val))) {
                res.push(val);
            }
        }
        return res;
    }

    function drop(ary, n = 1) {
        let len = ary.length;
        let res = [];
        for (let i = n; i < len; i++) {
            res.push(ary[i]);
        }
        return res;
    }

    function dropRight(ary, n = 1) {
        let len = ary.length;
        if (n < len) {
            ary.length -= n;
        } else {
            ary = [];
        }
        return ary;
    }

    




    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy: differenceBy,
        drop: drop,
        dropRight: dropRight,


    }
}();