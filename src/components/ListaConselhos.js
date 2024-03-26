

function ListaConselhos({itens}) {


  return (
    <>
      <h2>Lista de conselhos:</h2>
      {
          itens.map((item) => (
          <p>{item}</p>)
      )
      }
    </>
  );
}

export default ListaConselhos;
