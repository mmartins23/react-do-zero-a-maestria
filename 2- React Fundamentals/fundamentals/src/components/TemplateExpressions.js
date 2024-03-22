const TemplateExpressionExample = () => {
  const name = 'John';
  const age = 30;

  return (
      <div>
          <p>Hello, my name is {name} and I am {age} years old.</p>
          <p>{name.toUpperCase()}</p>
          <p>{age * 2}</p>
      </div>
  );
};

export default TemplateExpressionExample;