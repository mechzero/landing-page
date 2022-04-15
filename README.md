# Shopping Cart Functionality

You will be creating the core functionality used for a storefront application. The visual of the storefront as well as the JavaScript necessary to connect the code you will write, to that visual have already been created. 

Shopping carts are a fantastic tool to practice JavaScript fundamentals. 


## Getting Started

There are two ways you can work locally. You can ignore all the excess files and strictly work within the src file. Or, you can take advantage of the live server and tests to improve your experience.

To get the starter repository you can either download the project from GitHub by clicking on the green button and selecting download, or you can take advantage of GitHub/git by forking the repository and then cloning it to your local machine. To fork the repository, click the "Fork" button at the top right corner of the repository page. Once forked, view the repository under your repositories. Clone the your repository to your local machine by running: 

```bash
git clone path/to/your/GitHub/repository
```

If you would like to take advantage of the live server and/or the tests, you must have node.js installed on your system.

To check if you already have Node.js installed, open your terminal application and run the following code:

```bash
node -v
```

If Node.js is installed, a version will be returned--something like `v16.14.2`.

If Node.js is not installed, you can install it from their website: <a href="https://nodejs.org/en/" target="_blank">Nodejs.org</a>. Make sure to select the **LTS**, "Recommended for most users," version.

Once Node.js is installed, you will need to change your working directory to your project's directory. If using a tool like Visual Studio Code, the terminal window will automatically place you in your project folder. If using your terminal application, type `cd`  then drag the root project folder onto the terminal pane and hit [**enter]**. The result should be something similar to the following:

```bash
$ cd /Users/username/Desktop/Shopping\ Cart 
```

The path you enter will differ from the above but do note the space between `cd` and the start of the path.

Once in the working directory, you need to add all of the node.js dependencies for the live server and Jest to work. Anytime we download a Node.js project, this is the first step we take. 

```bash
npm install
```

You will see a new folder has been created named `node_modules`.  You can ignore this folder. Just know it holds all the stuff that makes the live server and Jest work, and that it's pretty huge. Because of its size, we don't push it or pull it from repositories. We just rebuild it by running the following command.

#### Live Server

The live server is a tool that will auto update every time you make a change to a file in the src directory. So if you update your script.js and you want to check whether it worked, there's no need to refresh, the live server will handle that for you. To view your project in the workspace, the live server is mandatory.

To start the live server, enter the following code into your terminal application or the terminal workspace pane:

```
npm run start
```

Once you have entered this code, the live server will continue to run. If you would like to stop the server, type **[control] [c]**. You will see the terminal window exit the live server.

#### Jest

Jest is a testing framework for JavaScript. Small, **unit** **tests** are written that check the pieces of functionality of an application. Tests are typically written first and then code is written to make them pass. You have the option of taking advantage or prewritten unit tests. To run the tests enter the following code into your terminal application or the terminal workspace pane:

```
npm run test
```

When the tests run, you will see a bunch of information come up in the terminal pane. It will look something like this. On the left, you can see the tests failing, on the right you can see the tests passing.


## Project Instructions

Step 1: Review the Starter Code  
Step 2: Build the Products  
Step 3: Create the Cart Functionality  
* `addToCart()`
* `increase()`
* `decrease()`
* `remove()`  

Step 4: Create the Checkout Functionality  
* `cartTotal()` 
* `pay()`  

Step 5: REFACTOR!  
Step 6: Re-test the User Interface  
[Optional] Add Extra Features  



## Built With

* Node.js (www.item1.com) - A JavaScript runtime for creating JavaScript servers
* Live Server (https://www.npmjs.com/package/live-server) - Live reloading for your workspace
* Jest (https://jestjs.io/) - A JavaScript testing framework

## License

[License](LICENSE.txt)
