# phase-2-project

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/107516857/218320983-d52ee587-58b1-4440-a090-c5221d2b618d.gif)

# Luke's Favorite Movies List

This is a simple application which displays three seperate pages using client-side routing. 

With this application you will be able to see a list of movies displayed each with the movie's title, a poster from the movie, and a short synopsis of the movie.

Using the Navigation bar at the top of the page you will be able to easily switch between each of these pages.

                
## Installation and Code
This is a simple React application which consists of 7 components. 

Here is a simple guide of the component heirarchy to help you navigate.

App is the top level component.

                        App
                         |
       _____________________________________                  
       |          |        |      |        |
     Header   MovieList  NavBar  Home  AddMovie
                  |
                Movie

In order to run this application simply copy and clone this repository into your local machine. 
Then use this command in your terminal. 

 json-server --watch movieData.json --port 8000
 
 This will fire up the server and allow the application to have access to it. 
 
 Next you need to open a new terminal and run this command.
 
 npm start
 
 This will start the application and open it in your browser.

## Usage

When the application first loads you will be shown the applications "Home" page. From this page you will be able to navigate the application using the links up at the top of the page.

When you click on the Movie List link you will be taken to the movie list page and there will be a list of movies displayed for you look through. Each movie has a delete button attacted to it, so you are able to delete any movie you choose from the application.

As the user you will be able to add new movies to the movie list by submitting them using the form on the Add Movie page.

Simply type in the movies title, and a short blurb about the movie then you can add a image of the movie by copying a movie poster from the internet and paste it into the movie poster input. 



