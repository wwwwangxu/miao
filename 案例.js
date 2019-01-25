//映射
var twoSum = function(nums, target) {
    let temp = {};
   for(let i = 0; i< nums.length; i++){
       let match = target - nums[i];
       if(temp[nums[i]] !== undefined){
           return [temp[nums[i]], i];
       }
       temp[match] = i;
   }
};

// 输入n个数并倒序输出
function inputNnumsAndReverseOutput(n) {
    if (n == 1) {
      console.log(prompt())
    } else {
      var v = prompt()
      inputNnumsAndReverseOutput(n - 1)
      console.log(v)
    }
  }

//
for (var i = 81; i <= 350; i++) {
var n = i

d70 = n % 7
d71 = (n - d70) / 7 % 7
d72 = (n - d70 - d71 * 7) / 7 / 7 % 7

d90 = n % 9
d91 = (n - d90) / 9 % 9
d92 = (n - d90 - d91 * 9) / 9 / 9 % 9

if ((d70 == d92) && (d71 == d91) && (d72 == d90)) {
    console.log(i)
    console.log('' + d72 + d71 + d70)
    console.log('' + d92 + d91 + d90)
}

}

//指针
var moveZeroes = function(nums) {
    let len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (; count <= len - 1; count++) {
        nums[count] = 0;
    }
};

//pow(x, n)
var myPow = function(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    var m = Math.abs(n);
    var t = myPow(x, Math.floor(m / 2));
    var result;
    if (m % 2 == 0) {
        result =   t * t;
    } else {
        result =  x * t * t;
    }
    if (n < 0) {
        return (1 / result);
    } else {
        return result;
    }
};

//add strings
var addStrings = function(num1, num2) {
    var l1 = num1.length - 1;
    var l2 = num2.length - 1;
    var maxLen = Math.max(l1, l2);
    var sumStr = '';
    var temp = 0;
    while (maxLen >= 0) {
        var n1 = (l1 >= 0) ? +num1[l1] : 0;
        var n2 = (l2 >= 0) ? +num2[l2] : 0;
        sumStr = (n1 + n2 + temp) % 10 + sumStr;
        temp = Math.floor((n1 + n2 + temp) / 10);
        l1--;
        l2--
        maxLen = Math.max(l1, l2);
    }
    return (temp == 0) ? sumStr : (temp + sumStr);
};

//罗马数字转整数
var romanToInt = function(s) {
    let l = s.length;
    let sumArr = [];
    let num;
    let sum = 0;
    for (let i = 0; i < l; i++) {
        num = s[i];
        function strToNum(str) {
            switch (str) {
                case "I":
                    return 1;
                case "V":
                    return 5;
                case "X":
                    return 10;
                case "L":
                    return 50;
                case "C":
                    return 100;
                case "D":
                    return 500;
                case "M":
                    return 1000;
            }
        }
        sumArr.push(strToNum(num)); //将判定环境转为数组；
        sum += strToNum(num);
    }
    for (let i = 0; i < l ; i++) {
        if (sumArr[i] < sumArr[i + 1]) {  //将判定环境转为数组；
            sum -= sumArr[i] * 2;
        }
    }
    return sum;
};

//两数之和-- 输入有序数组  双指针
var twoSum = function(numbers, target) {
    let len = numbers.length - 1;
    let j = 0;
    let num1 = numbers[j], num2 = numbers[len];
    while (num1 + num2 != target) {
        if (num1 + num2 < target) {
            j++;
        } else{
            len--
        }
        num1 = numbers[j];
        num2 = numbers[len];
    }
    return [j + 1, len + 1];
};

//合并有序数组
var merge = function(nums1, m, nums2, n) {
    let len = m + n - 1;
    let lm = m - 1;
    let ln = n - 1;
    while (lm >= 0 && ln >= 0) {
        if (nums1[lm] > nums2[ln]) {
            nums1[len] = nums1[lm];
            len--;
            lm--;
        } else {
            nums1[len] = nums2[ln];
            len--;
            ln--;
        }
    }
    while (ln >= 0) {
        nums1[len] = nums2[ln];
        len--;
        ln--;
    }
};

//删除排序数组中的重复项
var removeDuplicates = function(nums) {
    var j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[j]) {
        j++;
        nums[j] = nums[i];
      }
    }
    return j + 1;
  };

//strStr() 蛮力搜索
var strStr = function(haystack, needle) {
    let hayL = haystack.length;
    let neeL = needle.length;
    if (neeL == 0) {
        return 0;
    }
    if (neeL > hayL) {
        return -1;
    }
    for (let i = 0; i < hayL; i++) {
        if (haystack[i] == needle[0]) {
            let m = i;
            let t = 0;
            for (; t < neeL; t++) {
                if (haystack[m] == needle[t]) {
                    m++;
                } else {
                    break;
                }
            }
            if (t == neeL) {
                return i;
            }
        }
    }
    return -1;
};

//有一个以概率P产生0，概率(1-P)产生1的函数，给予该函数，构造出等概率产生0和1的新的发生器。
var random = function() {
    return Math.random() > 0.3 ? 0 : 1;
}
var equalProbability = function() {
    var n = random();
    var m = random();
    if (n == 0 && m == 1) {
        return 0;
    } else if (n == 1 && m == 0) {
        return 1;
    } else {
        return equalProbability();
    }
}
equalProbability()

//部分匹配表
var partMatchLen = function(str) {
    var partMatch = [];
    for (var i = 0, len = str.length; i < len; i++) {
        //前缀
        var prefix = "";
        //后缀
        var suffix = "";
        var newStr = str.slice(0, i + 1);
        if (newStr.length == 1) {
            partMatch[i] = 0;
        } else {
            for (var j = 0; j < i; j++) {
                prefix = newStr.slice(0, j + 1);  // slice 可取负值，比 substring 更灵活
                suffix = newStr.slice(i - j, i + 1);
                if (prefix == suffix) {
                    partMatch[i] = prefix.length;
                }
            }
            //不存在检测
            partMatch[i] = partMatch[i] ? partMatch[i] : 0;
        }
    }
    return  partMatch;
};

//single number II 位运算  数组中除了一位数出现一次，其余数均出现3次
var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        b = (b ^ nums[i]) & ~a;
        a = (a ^ nums[i]) & ~b;
    }
    return b;
};

//有效括号
var isValid = function(s) {
    s = s.split('');
	var map = {
		'(': 1,
		')': -1,
		'{': 2,
		'}': -2,
		'[': 3,
		']': -3
	}
	var stack = [];

	for (var i = 0; i < s.length; i++) {
		if (map[s[i]] > 0) {
			stack.push(map[s[i]]);
		} else {
			if ((stack.pop() + map[s[i]]) !== 0) {
				return false;
			}
		}
	}

	if (stack.length === 0){
		return true;
	} else {
		return false;
	}
};

//斐波那契数列数列  
var fib = function(N) {
    var cache = {};   //运用映射，避免重复计算相同项
    return temp(N);
    function temp(n) {
        if (n in cache) {
            return cache[n];
        }
        if ( n == 0) {
            return 0;
        }
        if (n < 3) {
            return 1;
        } else {
            return cache[n] = temp(n - 1) + temp(n - 2); 
        }
    }
}


//金币呈三角形状分布，如何捡钱最多 var moneys = [[2],[3,4],[6,5,7],[4,1,8,3]];
//如下，二维数组转化为坐标系问题，即从(x, y)处出发，如何捡到最多钱问题
//最初处于(0,0)位置；当位于(x,y)位置时，下一处只能在 (x + 1, y) 或 (x + 1, y + 1) 处
var moneys = [[2],[3,4],[6,5,7],[4,1,8,3]];
maxMoney(0,0)
function maxMoney(x, y) {
    if (x == moneys.length - 1) {
        return moneys[x][y];
    } else {
        return moneys[x][y] + Math.max(maxMoney(x + 1, y), maxMoney(x + 1, y + 1))
    }
}

//容易看出以上程序存在过多的重复运算，影响效率，可通过引入映射存储已计算过的参数，当该参数被重新计算时，直接返回该值，以降低复杂度
var moneys = [[2],[3,4],[6,5,7],[4,1,8,3]];
function maxMoney(x, y, cache = {}) {
    let key = x + ',' + y;
    if (key in cache) {
        return cache[key];
    }
    if (x == moneys.length - 1) {
        return moneys[x][y];
    } else {
        return cache[key] = moneys[x][y] + Math.max(maxMoney(x + 1, y, cache), maxMoney(x + 1, y + 1, cache));
    }
}

//三角形最小路径和问题
var minimumTotal = function(triangle) {
    let cache = {};      //运用映射避免计算重复项，减少复杂度
    return temp(0,0);
    function temp(x, y) {   //引入x, y建立坐标系的概念；
        let key = x + ',' + y;
        if (key in cache) {
            return cache[key];
        }
        if (x == triangle.length - 1) {
            return triangle[x][y];
        } else {
            return cache[key] = triangle[x][y] + Math.min(temp(x + 1, y), temp(x + 1, y + 1));
        }
    }
};

//一个数自乘得到其幂
function pow(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    let m = Math.floor(Math.abs(n / 2));
    let temp = pow(x, m);
    let res;
    if (n % 2 == 0) {
        res = temp * temp;
    } else {
        res = x * temp * temp;
    }
    return n > 0 ? res : (1 / x);
}

//最大子序和问题
//复杂度为O(N^2)
var maxSubArray = function(nums) {
    let sum = -Infinity;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let tmp = 0;
        for (let j = i; j < len; j++) {
            tmp += nums[j];
            if (tmp > sum) {
                sum = tmp;
            }
        }
    }
    return sum;
};
//复杂度为O(N)
var maxSubArray = function(nums) {
    let sum = -Infinity;
    let len = nums.length;
    let tmp = 0;
    for (let i = 0; i < len; i++) {
        tmp += nums[i];
        if (tmp > sum) {
            sum = tmp;
        }
        if (tmp < 0) {   //此处是关键
            tmp = 0;
        }
    }
    return sum;
}
//分治法
var maxSubArray = function(nums) {
    let len = nums.length;
    if (len == 1) {
        return nums[0];
    }
    let mid = Math.floor(len / 2);
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid);
    let maxLeft = maxSubArray(leftArr);
    let maxRight = maxSubArray(rightArr);
    let maxMid, maxMidleft = -Infinity, maxMidright = -Infinity;
    let tmpleft = 0, tmpRight = 0;
    for (let i = mid - 1; i >= 0; i--) {
        tmpleft += nums[i];
        if (tmpleft > maxMidleft) {
            maxMidleft = tmpleft;
        }
    }
    for (let i = mid; i < len; i++) {
        tmpRight += nums[i];
        if (tmpRight > maxMidright) {
            maxMidright = tmpRight;
        }
    }
    maxMid = maxMidleft + maxMidright;
    return Math.max(maxLeft, maxRight, maxMid);
}

// 实现indexOf()
var strStr = function(haystack, needle) {
    let hayL = haystack.length;
    let neeL = needle.length;
    let t = 0;
    if (neeL == 0) {
        return 0;
    }
    for (let i = 0; i < hayL; i++) {
        if (haystack[i] == needle[t]) {
            t++;
        } else {
            i = i - t;
            t = 0
        }
        if (t == neeL) {
            return i - neeL + 1;
        }
    }
    return -1;
};

//数组转链表
//迭代
function arrayToList(arr) {
    let head = {
        val: arr[0],
        next: null
    }
    let pre = head;
    for (let i = 1; i < arr.length; i++) {
        let node = {
            val: arr[i],
            next: null
        }
        pre.next = node;
        pre = node;
    }
    return head;
}

//递归
function arrayToList(arr, i = 0) {
    let head = {
        val: arr[0],
        next: null
    }
    if (i == arr.length - 1) {
        return null;
    }
    let tail = arrayToList(arr, i + 1);
    head.next = tail;
    return head;
}

//链表转数组
//迭代
function listToArray(head) {
    let arr = [];
    while (head.next != null) {
        arr.push(head.value);
        head = head.next;
    }
    arr.push(head.value)
    return arr;
}

//递归
listToArray(head, arr = [])
function listToArray(head, arr = []) {
    arr.push(head.value)
    if (head.next == null) {
        return head.value;
    }
    listToArray(head.next, arr);
    return arr
}

//向列表开头添加一个元素
function prepend(val, head) {
    let list = {
        val: val,
        next: head
    }
    return list
} 

//向列表末尾添加一个元素
function append(val, head) {
    let node = {
        val: val,
        next: null
    }
    let tmp = head;
    while (tmp.next != null) {
        tmp = tmp.next;
    }
    tmp.next = node;
    return head
}

//最大公共前缀
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let res = '';
    if (len == 0) {
        return res;
    } else if (len == 1) {
        return strs[0];
    }
    let firstStr = strs[0];
    let l1 = firstStr.length;
    for (let i = 0; i < l1; i++) {           //将数组中的第一个字符串作为参考对象
        for(let j = 1; j < len; j++) {
            if (firstStr[i] != strs[j][i]) {
                return res;
            }
        }
        res += firstStr[i];
    }
    return res;
};

//m 只猴子围成一圈选王，从一开始依次报数，报到数字 n 的猴子退出，下一只猴子继续从一报数，最后剩下的猴子为王
function monkeyKing(m, n) {
    let monkeyStatus= Array(m).fill(true);
    let speak = 0;
    let monkeyNums = m;
    for (let i = 0; i < m; i++, i %= m) {
        if (monkeyStatus[i]) {
            speak++;
            if (speak == n) {
                monkeyStatus[i] = false;
                speak = 0;
                monkeyNums--;
            }
            if (monkeyNums == 1) {
                break;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        if (monkeyStatus[i] == true) {
            return i + 1;
        }
    }  
}

//链表反转
function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    let a = null;
    let b = null;
    let c = head;
    while (c) {
        a = b;
        b = c;
        c = c.next;
        b.next = a;
    }
    return b;
}

//------------------------------------------------------------------------------------------------------------------------------------
//排序问题
//冒泡排序
function bubbleSort(arr) {
    for (let i = arr.length - 2; i >= 0; i--) {
        let exchange = false;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                exchange = true;
            }
        }
        if (!exchange) {
            return arr;
        }
    }
    return arr;
}

//选择排序
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {          //通过确定最小项的下标来确定最小项
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

//------------------------------------------------------------------------------------------------------------------------------------