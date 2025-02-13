const TipContents = (props: { 전달: any[] }) => {
  // console.log(props);
  // props.전달.map((a, i) => {
  //   console.log(a);
  //   return <li>{props.전달[i].title} </li>;
  // });

  return <li>{props.전달[0].title}</li>;
};
export default TipContents;
