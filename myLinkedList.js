// add a method prepend() to the linked list that adds a node to the beginning of the list

// class Node {
// 	constructor(value){
// 		this.value = value;
// 		this.next = null;
// 	}
// }

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this.printList();
	}

	prepend(value) {
		const newNode = {
			value: value,
			next: null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this.printList();
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next
		}
		console.log(array);
		return array;
	}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);