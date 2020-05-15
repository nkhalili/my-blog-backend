import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req, res) => {
  try {
    const articleName = req.params.name;

    // to connect to your db
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });

    // db name
    const db = client.db('my-blog');

    // query our collection
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    // res.status(200).send(articleInfo);
    res.status(200).json(articleInfo); // .json() deals better with JSON

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  try {
    const articleName = req.params.name;

    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });
    const db = client.db('my-blog');
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );

    const updatedArticleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error updating', error });
  }
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
  try {
    const { username, text } = req.body;
    const articleName = req.params.name;

    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });
    const db = client.db('my-blog');

    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );

    const updateArticleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    res.status(200).json(updateArticleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
});

app.listen(8000, () => console.log('Listening on port 8000'));
