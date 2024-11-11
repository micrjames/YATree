# YATree
A Tree implementation written in Typescript.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
Like so many projects before, this project is written to facilitate the creation of other projects. I decided not to use an array as the basic container for the data to be held in the Tree. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Tree using that as the data container.

## Technologies Used
Only plain, vanilla Typescript is used with no libraries or other packages.

## Features
* Create a Tree-based structure of elements.
* Add an element  to the Tree-based structure.
* Find a given value of an element within the Tree-based structure of elements.
* *Traverse* the Tree-based structure entirely or up to the given value of an element.

## Setup
Simply import the *YATree* class into the project in the usual way. We must also, at a minimum, import the *Node* class from *NodeCollection* dependency project.

## Usage
Create a *YATree* object with a specified root node.
```
    const rootNode = new Node(1);
    const tree = YATree(rootNode);
```
    Here, above, we have created a *YATree* that contains a single node with *1* as its value. Next, we can add nodes to the *YATree* by *insert*ing elements to the Tree.
```
    tree.traverseTo(rootNode);
    tree.insert(2);
    tree.insert(3);
```
    Above, we have *traverse*d to the root node and inserted two nodes, one containing the value *2* and the other containing the value *3*. In this case, the node has not been traversed at all, since we specified the root node to be the node to which to traverse. So, the nodes were added to the *1*st level. We may, after traversal to that *level*, insert a value as the right most element at that *level*. Similar, to the above, we can *traverse* the tree to the bottom of the tree.
```
    tree.traverse();
    tree.insert(2);
    tree.insert(3);
```
The above code is equivalent to the code listed previously, as previously existing node exists at the *0*th level and similarly does not traverse. Also, we can *traverse* to a specified *level*.
```
    const level = 1;
    tree.traverseTo(level)
    tree.insert(2);
    tree.insert(3);
```

## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 
 
## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.
 
## Contact
Feel free to contact me @michaelrjamesjr on twitter.  
