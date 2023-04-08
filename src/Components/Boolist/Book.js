import '../Style/Style.css';
import NewBookForm from './NewBookForm';

const Book = () => {
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
      </div>
      <NewBookForm />
    </>
  );
};

export default Book;
