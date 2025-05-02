function EmptyList(props){

  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (

    props.itemsList.length == 0 ? <p>Color Names is undefined.</p> : null
    
  );
}
export default EmptyList;