const DisplayQuestion = (props) => {
  const { selected, content } = props;
  return (
    <>
      <h1>{content[selected].heading}</h1>
      <span style={{ color: "#231F20" }}>21/7/2021</span>
      {content[selected].para.map((item) => {
        return <p>{item.p}</p>;
      })}
    </>
  );
};

export default DisplayQuestion;
