// Connecting to a SQL Database Using SQLAlchemy
// Overview of SQLAlchemy
// SQLAlchemy is a powerful SQL toolkit and ORM for Python, allowing for easy database interactions.
// Setting Up SQLAlchemy
// Install SQLAlchemy:




// Set up a connection to a SQLite database:

// from sqlalchemy import create_engine, Column, Integer, String
// from sqlalchemy.ext.declarative import declarative_base
// from sqlalchemy.orm import sessionmaker

// # Create an engine and base class
// engine = create_engine('sqlite:///example.db')  # SQLite database
// Base = declarative_base()

// # Define a model
// class User(Base):
//     __tablename__ = 'users'
//     id = Column(Integer, primary_key=True)
//     name = Column(String)
//     age = Column(Integer)

// # Create the table
// Base.metadata.create_all(engine)

// # Create a session
// Session = sessionmaker(bind=engine)
// session = Session()


// Performing CRUD Operations
// Create:

// new_user = User(name='Alice', age=30)
// session.add(new_user)
// session.commit()


// Read:

// users = session.query(User).all()
// for user in users:
//     print(user.name, user.age)


// Update:

// user = session.query(User).filter_by(name='Alice').first()
// user.age = 31
// session.commit()


// Delete:

// session.delete(user)
// session.commit()



// 3. Connecting to a NoSQL Database Using PyMongo
// Overview of PyMongo
// PyMongo is the official Python driver for MongoDB, allowing you to interact with MongoDB databases easily.
// Setting Up PyMongo
// Install PyMongo:

// pip install pymongo


// Set up a connection to a MongoDB database:

// from pymongo import MongoClient

// # Create a connection to the MongoDB server
// client = MongoClient('mongodb://localhost:27017/')  # Adjust for your MongoDB server
// db = client['example_db']  # Create or use an existing database
// users_collection = db['users']  # Create or use an existing collection


// Performing CRUD Operations
// Create:

// new_user = {'name': 'Alice', 'age': 30}
// users_collection.insert_one(new_user)


// Read:

// users = users_collection.find()
// for user in users:
//     print(user['name'], user['age'])


// Update:

// users_collection.update_one({'name': 'Alice'}, {'$set': {'age': 31}})


// Delete:

// users_collection.delete_one({'name': 'Alice'})



// 4. Conclusion and Best Practices
// Use SQLAlchemy for SQL databases to leverage the benefits of ORM, including easier queries and a more Pythonic approach to data manipulation.
// Use PyMongo for MongoDB for flexible schema design and ease of use with JSON-like documents.
// Always handle exceptions and ensure proper database connection management in your applications.

