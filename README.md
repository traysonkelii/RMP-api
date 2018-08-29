# RMP-api
A simple api which scrapes data from ratemyprofessor

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download to your project directory, add `README.md`, and commit:

```sh
git clone https://github.com/traysonkelii/RMP-api.git
git add README.md 
git commit -m "your commit message"
git push
```
Use npm to install the proper packages:

```sh
npm i --save
```

Serve the page: 
```sh
npm start
```

## Usage

Once the project is properly installed go to localhost:3000 in your web browser
There are 5 basic endpoints that can be used (feel free to add or modify more if you please).
First off, you would want to search for a school code using "/api/school/{name}" endpoint
that returns a list of school info. Wherever you see schoolId you would use the school pk_id
```JSON
{
    "schoolcity_s": "Provo",
    "pk_id": 135,
    "schoolcountry_s": "United States",
    "schoolname_s": "Brigham Young University",
    "schoolstate_s": "UT"
  }
  ```
  Next with the schoolId you can do the same thing for a professor using the 
  /api/professor/{schoolId}/{name} endpoint (here the name of the professor 
  can be by first or last name or both). But the same rules apply wherever you see 
  professorId you use the pk_id
  ```JSON
  {
    "teacherlastname_t": "Barker",
    "pk_id": 50662,
    "schoolid_s": "135",
    "averageratingscore_rf": 4.3,
    "total_number_of_ratings_i": 95,
    "teacherfirstname_t": "Cory"
  }
  ```
  With the professorId calls can be made to the rest of the endpoints and data can
  then be extracted and used in your apps! For some of the end points (grades and comments)
  I currently have the code retrieving the first 20 entries from comments left by students
  feel free to dig around the code and create your own endpoints.


## Support

Please [open an issue](https://github.com/traysonkelii/RMP-api/issues/new) for support or questions.
The api is built off of the Hapi Framework and the majority of the node modules are plugins to support that framework 
a more detailed description of instructions can be found at their site [here](https://hapijs.com/). The UI for testing and 
demo is based off the hapi-swagger node moduel found [here](https://github.com/glennjones/hapi-swagger)


## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/traysonkelii/RMP-api/compare/).
