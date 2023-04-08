const NewBookForm = () => (
  <>
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
  </>
);

export default NewBookForm;
