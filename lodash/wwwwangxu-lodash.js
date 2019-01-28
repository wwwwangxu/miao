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

    function fill(ary, val, start = 0, end = ary.length) {
        for (let i = start; i < end; i++) {
            ary[i] = val;
        }
        return ary;
    }

    /*
    function findIndex(ary, predicate, fromIndex = 0) {
        let fn;
        if (typeof predicate == "function") {
            fn = predicate;
        } else if () {

        }

        for (let i = 0; i < ary.length; i++) {
            if (ary[i])
        }
    }
    */

    function flatten(ary) {
        let res = [];
        for (let val of ary) {
            if (Array.isArray(val)) {
                res.push(...val);
            } else {
                res.push(val);
            }
        }
        //return [].concat(...ary)
        return res;
    }

    function flattenDeep(ary) {
        let res = [];
        for (let val of ary) {
            if (Array.isArray(val)) {
                res.push(...flattenDeep(val));
            } else {
                res.push(val);
            }
        }
        return res;
    }

    function flattenDepth(ary, depth = 1) {
        let res = [];
        if (depth == 0) {
            return ary;
        }
        for (let val of ary) {
            if (Array.isArray(val)) {
                res.push(...flattenDepth(val, depth - 1));
            } else {
                res.push(val);
            }
        }
        return res;
    }

    function fromPairs(pairs) {
        let map = {};
        for (let pair of pairs) {
            let key = pair[0];
            let val = pair[1];
            map[key] = val;
        }
        return map;
    }

    function head(ary) {
        return ary[0];
    }

    function indexOf(ary, val, fromIndex = 0) {
        let len = ary.length;
        for (let i = fromIndex; i < len; i++) {
            if (ary[i] == val) {
                return i;
            }
        }
        return -1;
    }

    function initial(ary) {
        let res = [];
        let t = ary.length - 1;
        for (let i = 0; i < t; i++) {
            res.push(ary[i]);
        }
        return res;
    }

    function intersection(...ary) {
        let set = new Set(ary[0]);
        let res = [];
        ary[1].forEach(it => {
            if (set.has(it)) {
                res.push(it);
            }
        })
        return res;
    }

    function join(ary, separator) {
        let res = "";
        let len = ary.length;
        for (let i = 0; i < len; i++) {
            if(i < len - 1) {
                res += ary[i] + separator;
            } else {
                res += ary[i];
            }
        }
        return res;
    }

    function last(ary) {
        return ary[ary.length - 1];
    }

    function lastIndexOf(ary, val, fromIndex = ary.length -1) {
        for (let i = fromIndex; i >= 0; i--) {
            if(ary[i] == val) {
                return i;
            }
        }
        return -1;
    }

    function pull(ary, ...valAry) {
        let set = new Set(valAry);
        ary =  remove(ary, function(it) {
            return set.has(it)
        });
        return ary;
    }

    function remove(ary, predicate) {
        let res = [];
        for (let item of ary) {
            if (!predicate(item)) {
                res.push(item);
            }
        } 
        return res;
    }

    function reverse(ary) {
        let res = [];
        for (let val of ary) {
            res.unshift(val);
        }
        return res;
    }

    function sortedIndex(ary, val) {
        for (let i= 0; i < ary.length; i++) {
            if (ary[i] >= val) {
                return i;
            }
        }
        return ary.length; 
    }

    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy: differenceBy,
        drop: drop,
        dropRight: dropRight,
        fill: fill,
        flatten: flatten,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        fromPairs: fromPairs,
        head: head,
        indexOf: indexOf,
        initial: initial,
        intersection: intersection,
        join: join,
        last: last,
        lastIndexOf: lastIndexOf,
        pull: pull,
        reverse: reverse,
        sortedIndex: sortedIndex,
        remove: remove,

    }
}();