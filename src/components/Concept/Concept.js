function Concept(data) {
    console.log(data);

    return (
      <li className="concept">
        <img src={data.image} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </li>
    );
}

export default Concept;