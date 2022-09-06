The course entails some of the features mentioned below

React
ReactStrap
Redux
Fetch

The node environment is intertwined with Git and that's one of the prime reasons why it's good to be well versed in Git

To intitialize a folder in your workspace as a git repository just go to the directory in the powershell and type git init.
This marks the particular folder as a master branch

git status will give you the basic details of the repository

git add .
you will add all the files in the folder to the in the staging area
after this write
git commit -m "some message"
which will take a screenshot of the state and will be saved in your memory

git log --oneline will give you a brief history of your commits
merely typing git log will give you a much verbose display of all the commit detials

The next git command that we're going to learn about is git checkout. So this checkout command allows us to checkout a filefrom a previous commit in our git repository. So if we don't like the current file that we have in our folder, and we want to go back to a previous version of the file. We can always check out the file from a previous commit, or from the current commit, and then continue to work with that file. So let's make use of this and see some further changes to our git repository.

Writing the checkout command automatically stages the data to commit.

git reset Head "some filename " read about this. This will basically unstage a staged file.


To add these repositories online, 
git remote add origin <repository URL>	adds the remote online repository

git push -u origin master pushes the local git repository to the origin to the master branch

Why JS frameworks?
Complicated manipulations with DOM
There's a standard set of functionalities which can be coupled in a software library

Read difference between software library and framework

library is basically a collection of functions.
framework is a particular way of implementing the application at hand

When using a framework, it will always take charge of the main code of the web application.
When using a library however, your vanilla js code is the main code with additional functions provided by the library.

Imperative vs Declarative programming 
Imperative programming means that the developer mentions what is to be done along with how exactly should it be done.
Declarative programming means that the developer only mentions what is to be done and leaves the actual implementation to the react framework.
usually frameworks use the declarative approach.

Three Ss of react are speed, simplicity and scalability.

 just type npm start and your React application will start up, and be served using that built-in server that is part of the create-react-app ecosystem. 

Much of the HTML code that you see in a react app can be called as elements. It is a collection of these elements which collectively make a component.

Any css class in react will have the name ClassName and not just class as in normal HTML.
This is because writing just class in the inline css will be confused with actual classes used in the js code elsewhere. This is the reason why we just use ClassName instead.

Rendering The View to the DOM
Inside src folder, inside index.js file, we have ReactDOM.render(<App />, document.getElementById('root')
what this basically says is that "Render the content returned from the App component and paste it in the space on the webpage pointed by the id root "

What we basically do is we build the component in the app.js folder inside of the src folder. Then we import it inside of index.js in the same directory. Finally, the view is rendered inside the index.js file and pasted on to the empty space pointed by id root in index.html in public folder.

JSX
Syntactic Extension to Javascript