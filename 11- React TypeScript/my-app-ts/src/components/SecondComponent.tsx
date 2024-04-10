interface Props {
    name: string;
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>This is my {props.name} component.</p>
    </div>
  )
}

export default SecondComponent