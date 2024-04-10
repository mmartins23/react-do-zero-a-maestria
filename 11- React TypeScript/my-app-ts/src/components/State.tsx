import { ChangeEvent, useState } from "react"

type Props = {}

const State = (props: Props) => {
    const [text, setText] = useState<string | null>("Testing a hook");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    }
  return (
    <div>
        <p>The text is: {text}</p>
        <input type="" onChange={handleChange}/>
    </div>
  )
}

export default State