interface Value {
	data: string | number;
	check: boolean;
}

export function FormatValue(val1: Value, val2: Value, val3: Value) {
	let arr = [];

	let dt1 = Number(val1.data);
	let dt2 = Number(val2.data);
	let dt3 = Number(val3.data);

	if (dt1 && val1.check === true) {
		arr.push(dt1);
	}
	if (dt2 && val2.check === true) {
		arr.push(dt2);
	}
	if (dt3 && val3.check === true) {
		arr.push(dt3);
	}

	return arr;
}
