import { Manager } from './manager'
import { Subordinate } from './subordinate'


const subordinate1 = new Subordinate('xy', 67, "eismann")


const manager = new Manager('boss hans', 80, 'manager');

manager.addSubordinate(subordinate1);


console.log(manager.getSubordinates());