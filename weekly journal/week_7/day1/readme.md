# Activity - Hello Express

Create a route **"/name"** in Express, which will return firstname and lastname as a JSON response. The output is shown below: 

**Response (JSON):**

``{"firstname": "John", "lastname": "Doe"}``


# Activity 2 - Route Parameters 

Create a route **"/digital-crafts/cohort/:year"**, where the user can pass in the year as a route parameter as shown below: 

**GET Request:**

 ```/digital-crafts/cohort/2020``` 

**Response (String):**

```I study at DigitalCrafts 2020 Cohort```


# Activity 3 - Post Name 

Create a route **"/name"** where user can send first name and last name in the body as JSON and get their full name back as JSON. 

**Request (POST):** 
```
{

 "firstname": "John", 

"lastname": "Doe"

}
```
**Response (POST):** 
```
{

 "fullname": "John, Doe" 

}
```


# Assignment - TODO List Web API Using Node


In this project you are responsible for creating the Web API for TODO app using Node. 

Your API will expose the following endpoints: 

- Get all TODO items (/todos) 
- Save a new TODO item (/todos)  

Each TODO item consists of the title, priority, date created

You are also responsible for creating the User Interface for your app which will consume the API. 

**HARD MODE:** 

- Ability to delete an existing TODO item - /todos DELETE 

- Ability to update an existing TOD item 

* Creating a class for TODO list item is not mandatory but it is a good practice. 