// 方式1
function quickSourt (arr, left = 0, right = arr.length - 1) {
    if(right - left < 1) {
        return ;
    }
    let pivotIndex = left;
    let pivot = arr[left];
    let start = left;
    let end = right;
    let move = 'left';
    while(start < end) {
        if(move === 'left') {
            if(arr[end] < pivot ) {
                swap(arr, pivotIndex, end);
                pivotIndex = end;
                start = start + 1;
                move = 'right';
            } else {
                end--;
            }
        } else if(move === 'right') {
            if(arr[start] > pivot ) {
                swap(arr, start, pivotIndex);
                pivotIndex = start;
                end = end - 1;
                move = 'left';
            } else {
                start++;
            }
        }
    }
    quickSourt(arr, left, pivotIndex - 1);
    quickSourt(arr, pivotIndex + 1, right);
    return arr;
}

// 方式2

function quickSourt2 (arr, left = 0, right = arr.length - 1) {
    if(right - left < 1) {
        return ;
    }
    let pivotIndex = left;
    let pivot = arr[left];
    let start = left + 1;
    let end = right;

    while(start < end) {
        while( start < end && arr[end] >= pivot) {
            end--;
        }
        while(start < end &&  arr[start] < pivot) {
            start ++;
        }
        if(start < end) {
            swap(arr, start, end);
        }
    }
    swap(arr, pivotIndex, start);

    quickSourt2(arr, left, start - 1);
    quickSourt2(arr, start + 1, right);
    return arr;
}
function swap(arr, index1, index2) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}
console.log(quickSourt2([6, 1, 6, 9, 23, 1,6,9, 3,8,4,7,10]) + '');
