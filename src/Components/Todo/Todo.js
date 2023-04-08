import '../Style/Style.css';

const MyTodo = () => {
  const data = [
    {
      id: 1,
      title: 'Setup development environment',
      author: ' Okpara Blessing',
    },
    {
      id: 2,
      title: 'Develop website and add content',
      author: ' Okpara',
    },
    {
      id: 3,
      title: 'Deploy to live server',
      author: ' Blessing',
    },
  ];
  return (
    <>

      <div className="container">
        {data.map((item) => (
          <div className="eachBook" key={item.id}>
            <h2>{item.title}</h2>
            <p>
              By
              {item.author}
            </p>
            <button type="button" id="remove">Remove</button>
          </div>
        ))}
        <form>
          <hr />
          <h3>Add New Book</h3>
          <div className="formInput">
            <input type="text" id="title" placeholder="Book Title" />
            <br />
            <input type="text" id="name" placeholder="Author" />
            <br />
            <button type="submit">ADD BOOK</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyTodo;
