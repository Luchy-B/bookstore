import propTypes from 'prop-types';

const MyBook = ({ title, author }) => (
  <div className="eachBook">
    <h2>{title}</h2>
    <p>
      By
      {author}
    </p>
    <button type="button" id="remove">Remove</button>
  </div>
);

MyBook.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default MyBook;
