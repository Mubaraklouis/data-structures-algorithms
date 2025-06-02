class Node{
    constructor(data){

        this.data = data;
        this.left = null;
        this.right = null
    }


}

 // create the node by stantiating the node class
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

//create the pointers to connect the nodes together

a.left = b
a.right = c

b.left = d
b.right = e





