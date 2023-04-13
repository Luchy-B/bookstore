import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlEndPoint = 'RFxxJwmoRBEoRgECVtEq/books/';
const url = baseUrl + urlEndPoint;
const initialState = {
  books: [],
  isLoading: false,
  error: false,
  ifSuccess: false,
};

const changeToObjectData = (data) => {
  const newDataArray = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    newDataArray.push(newObject);
  });
  return newDataArray;
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const dataStream = await axios(url);
    let data = Object.entries(dataStream.data);
    data = changeToObjectData(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk(
  'books/postBookToApi',
  async ({ id, title, author }) => {
    try {
      const dataStream = await axios.post(url, {
        item_id: id,
        title,
        author,
        category: 'fiction',
      });
      return dataStream;
    } catch (err) {
      return err;
    }
  },
);

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const dataStream = await axios.delete(url + id);
    return dataStream;
  } catch (err) {
    return err;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(postBook.pending, (state) => {
      state.ifSuccess = false;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      state.ifSuccess = true;
    });
    builder.addCase(postBook.rejected, (state) => {
      state.ifSuccess = false;
    });
    builder.addCase(deleteBook.pending, (state) => {
      state.ifSuccess = false;
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.ifSuccess = true;
    });
    builder.addCase(deleteBook.rejected, (state) => {
      state.ifSuccess = false;
    });
  },
});

export default booksSlice.reducer;
