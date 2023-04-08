import '../Style/Style.css';
import NewBookForm from './NewBookForm';
import MyBook from './Book';

const BookList = () => {
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
          <MyBook key={item.id} id={item.id} title={item.title} author={item.author} />
        ))}
      </div>
      <NewBookForm />
    </>
  );
};

export default BookList;
