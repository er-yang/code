/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.time = 1;
  this.map = new Map();
  this.tail = null;
};

var Item = function (key, value, time) {
  this.key = key;
  this.value = value;
  this.time = time;
  this.frequece = 0;
  this.parent = null;
  this.next = null;
};
/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let item = this.map.get(key);
    item.time = ++this.time;
    item.frequece++;

    let cur = item;
    let parent = cur.parent;
    let next = cur.next;

    while (!this.compareOld(cur, parent)) {
      cur.parent = parent.parent;
      cur.next = parent;
      parent.parent = cur;
      parent.next = next;

      if (next) {
        next.parent = parent;
      } else {
        this.tail = parent;
      }
      parent = cur.parent;
      next = cur.next;
    }

    return item.value;
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if(this.map.size >= this.capacity) {
    if(this.capacity <= 0) {
      return
    }
    this.map.delete(this.tail.key);
    this.tail = this.tail.parent;
    if(this.tail) {
      this.tail.next = null;
    }
  }

  let item ;
  if(this.map.has(key)) {
    item = this.map.get(key);
    item.value = value;
  } else {
    item = new Item(key, value, ++this.time);
  }
  item.frequece++;
  if(this.tail) {
    let cur = item;
    let parent;
    if(this.map.has(key)) {
       parent= cur.parent;
    } else {
      parent = this.tail;
      this.tail = cur;
      parent.next = cur;
    }
    cur.parent = parent;
    let next = cur.next;

    while(!this.compareOld(cur, parent)) {
      // if(parent === this.tail) {
      //   this.tail === cur;
      // }
      cur.parent = parent.parent;
      cur.next = parent;
      parent.parent = cur;
      parent.next = next;
      if (next) {
        next.parent = parent;
      } else {
        this.tail = parent;
      }
      parent = cur.parent;
      next = cur.next;
    }

  } else {
    this.tail = item;
  }
  this.map.set(key, item);

};

LFUCache.prototype.compareOld = function (item1, item2) {
  if (!item2) {
    return true;
  }
  if (item1.frequece === item2.frequece) {
    return item1.time < item2.time;
  }
  return item1.frequece < item2.frequece;
};
// let lFUCache = new LFUCache(3);
// console.log(lFUCache.put(2, 2));
// console.log(lFUCache.put(1, 1));
// console.log(lFUCache.get(2));      // 返回 1
// console.log(lFUCache.get(1));      // 返回 1
// console.log(lFUCache.get(2));      // 返回 1

// console.log(lFUCache.put(3, 3));   // 去除键 2
// console.log(lFUCache.put(4, 4));   // 去除键 2

// console.log(lFUCache.get(3));      // 返回 -1（未找到）
// console.log(lFUCache.get(2));      // 返回 3
// console.log(lFUCache.get(1));      // 返回 3
// console.log(lFUCache.get(4));      // 返回 3

// console.log(lFUCache.put(4, 4));   // 去除键 1
// console.log(lFUCache.get(1));      // 返回 -1（未找到）
// console.log(lFUCache.get(3));      // 返回 3
// console.log(lFUCache.get(4));      // 返回 4
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
