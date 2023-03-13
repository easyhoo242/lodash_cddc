/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param {Array} array 要处理的数组
 * @return {Array} 返回一个新数组
 */
export function compact(array) {
	return array.filter(Boolean)
}
