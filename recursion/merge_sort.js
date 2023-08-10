function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const sorted = [];
  const mid = Math.floor(array.length / 2);

  const arr1 = mergeSort(array.slice(0, mid));
  const arr2 = mergeSort(array.slice(mid));

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  if (arr1.length > 0) {
    while (arr1.length > 0) {
      sorted.push(arr1.shift());
    }
  } else if (arr2.length > 0) {
    while (arr2.length > 0) {
      sorted.push(arr2.shift());
    }
  }

  return sorted;
}

console.log(mergeSort([1, 2, 4, 6, 9, 8, 5, 3]));
