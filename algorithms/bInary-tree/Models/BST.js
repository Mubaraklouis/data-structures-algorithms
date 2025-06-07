import Node from "./Node.js"

/*
|  ----------------------------------------------------------------
|    This class is the main Binary search Tree class where all the 
|    methods are created
|  -----------------------------------------------------------------
|   
|
|
|*/




class BST{
	constructor(){
		this.root = null;
	}

	isEmpty(){
		return this.root === null;
	}

	insert(data){
		const newNode = new Node(data);
		if(this.isEmpty){
			this.root = newNode
		}
		else{
			insertNode(this.root,newNode)
		}

	}

	insertNode(root,newNode){
		if(newNode.data < root.data){
			if(root.left === null){
				root.left = newNode
			}
			else{
				insertNode(root.left,newNode)
			}
		}
		else{
			if(root.right === null){
				root.right = newNode;

			}
			else{
				insertNode(root.right,newNode)
			}
		}

	}


	search(root,data){
		if(!root){
			return false
		}
		else{
			if(root.data === data){
				return true
			}
			else if(root.data < data){
				return search(root.left,data)
			}
			else{
				return search(root.right,data)
			}

		}
			
				}
	
}


export default BST;