# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

//root.render(jsxHeading);

// const Title = ()=>(
//     <h1>hello this is title </h1>
// );
// const number=1000;

// const HeadingComponent = ()=>(
//     <div id="container">
//         {number}
//     <Title />
//      <h1>hello react functional component</h1>
//      </div>
// );

// const perent = React.createElement("div", { id: "perent",key: "child1"  }, [//this is create like a object like a element
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "this is my REACT.js 🚀"),
//     React.createElement("h2", {}, "i am a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2",key: "child2"  }, [
//     React.createElement("h1", {}, "i am a h1 tag"),
//     React.createElement("h2", {}, "i am a h2 tag"),
//   ]),
// ]);

/*
jsx code
 const jsxHeading=<h1 id="heading">Hello react 🚀🚀</h1>;
console.log(jsxHeading);
*/
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React!"
 );
root.render(perent);


two types of export and import 

1.default 

export default component;
import Body from "path";

2.named export import

export const component;
import {component } from "path";


*** hooks **

Normal js utility funstion 
-->useState() = use to generate superpower  variables in react
-->useEffect()


** API
useEffect(()=>{
    fetchData();
},[]);
const fetchData = async()=>{    //fetch data from the API
  const data = await fetch(
    "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"
  );
  const json = await data.json();
  console.log(json);
};


#git upload data 

git branch -M main
git push -u origin main

#for start server 

npm run start 