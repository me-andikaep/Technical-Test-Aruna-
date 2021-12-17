import React, { useState } from 'react';
import { sum, substract, mul, div } from './Operator';
import { FormatValue } from './FormatValue';

interface Props {}
interface Value {
	data: string | number;
	check: boolean;
}

const FormCalculator = (props: Props) => {
	const [input1, setInput1] = useState<Value>({ data: '10', check: false });
	const [input2, setInput2] = useState<Value>({ data: '2', check: false });
	const [input3, setInput3] = useState<Value>({ data: '5', check: false });
	const [result, setResult] = useState<Number | null>(null);

	function handleSubmit(action: string) {
		const data = FormatValue(input1, input2, input3);

		if (data?.length <= 1)
			return alert('angka yang diinput / di ceklis minimal 2');

		if (action === 'tambah') {
			let resultSum = data.reduce(sum);
			setResult(resultSum);
		} else if (action === 'kurang') {
			let resultSub = data.reduce(substract);
			setResult(resultSub);
		} else if (action === 'kali') {
			let resultMul = data.reduce(mul);
			setResult(resultMul);
		} else if (action === 'bagi') {
			let resultDiv = data.reduce(div);
			setResult(resultDiv);
		} else {
			return;
		}

		return;
	}

	return (
		<div className='container'>
			<form className='form' onSubmit={(e) => e.preventDefault()}>
				<div className='form-group'>
					<input
						type='text'
						className='input'
						onChange={(e) => setInput1({ ...input1, data: e.target.value })}
						value={input1.data || ''}
					/>
					<input
						type='checkbox'
						onChange={(e) =>
							setInput1((prev) => {
								return { ...prev, check: !prev.check };
							})
						}
						checked={input1.check}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						className='input'
						onChange={(e) => setInput2({ ...input2, data: e.target.value })}
						value={input2.data || ''}
					/>
					<input
						type='checkbox'
						onChange={(e) =>
							setInput2((prev) => {
								return { ...prev, check: !prev.check };
							})
						}
						checked={input2.check}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						className='input'
						onChange={(e) => setInput3({ ...input3, data: e.target.value })}
						value={input3.data || ''}
					/>
					<input
						type='checkbox'
						onChange={(e) =>
							setInput3((prev) => {
								return { ...prev, check: !prev.check };
							})
						}
						checked={input3.check}
					/>
				</div>

				<button className='btn' onClick={() => handleSubmit('tambah')}>
					+
				</button>
				<button className='btn' onClick={() => handleSubmit('kurang')}>
					-
				</button>
				<button className='btn' onClick={() => handleSubmit('kali')}>
					x
				</button>
				<button
					className='btn'
					onClick={() => handleSubmit('bagi')}
					name='bagi'
				>
					/
				</button>
			</form>

			<div className='result'>
				<h3>Hasil</h3>
				<h3>{result}</h3>
			</div>
		</div>
	);
};

export default FormCalculator;
