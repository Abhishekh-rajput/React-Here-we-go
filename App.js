/* NAMASTE REACT EPISODE 1: INCEPTION
How do we create a nested structure like this
<div id='parent'>
   <div id='child'>
   <h1>I'm h1 tag</h1>
   <h2>I'm h2 tag</h2>
   </div>
   <div id='child2'>
   <h1>I'm h1 tag</h1>
   <h2>I'm h2 tag</h2>
   </div>
</div>
React element is an object here which converts itself into html which is understood by the browser
To create two children at the same level we have yo pass both as an array to the third argumnet of React.createElement
to create a similar structure we have pass second child into a array as a third argument to parent
*/

const parent=React.createElement('div',{id:"parent"},[
React.createElement('div', {id:"child"},[
        React.createElement('h1',{},'Im an h1 tag'),
        React.createElement('h2',{},'Im an h2 tag')
    ]),React.createElement('div', {id:"child2"},[
        React.createElement('h1',{},'Im an h1 tag'),
        React.createElement('h2',{},'Im an h2 tag')
    ]),
]);

//const heading=React.createElement('h1',{id:"heading",xyz:'abc'},"Hello World From React!");
//console.log(heading);//this react element is a js object
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);