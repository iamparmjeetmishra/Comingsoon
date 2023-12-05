import {useState} from 'react'

export default function App() {
	const [startRange, setStartRange] = useState('')
	const [endRange, setEndRange] = useState('')
	const [randomNumber, setRandomNumber] = useState(null)
	const [errorMsg, setErrorMsg] = useState('')

	const handleChange = (e) => {
		if(e.target.name === 'startRange') {
			setStartRange(Number(e.target.value))
		} else if (e.target.name === 'endRange') {
			setEndRange(Number(e.target.value))
		}
	}

	function generate()  {
		// if(startRange >= endRange) 
		// {
		// 	setErrorMsg('Start range must be less than end range.')
		// 	return;
		// }
		if(!startRange || !endRange || isNaN(startRange) || is NaN(endRange)) {
			setRandomNumber('invalid Range')
			return;
		}
		
		setErrorMsg('')

		const randomNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
		setRandomNumber(randomNumber);
	}


	return (
		<>
			<input type="number" id="startRange" name="startRange" onChange={handleChange} placeholder="Start Num" /> <span>{startRange}</span> <br />
			<input type="number" id="endRange" name="endRange" onChange={handleChange} placeholder="End Num" /> <span>{endRange}</span>
			<br />
			<button id="generate" onClick={generate} >Generate</button>
			<div>
				{errorMsg && <p>Error: {errorMsg}</p>}
				Random Number:{randomNumber !== null && <p>{randomNumber}</p>} 
			</div>
		</>
	);
}
