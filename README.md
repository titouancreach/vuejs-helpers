# vuejs-helpers
List of helpers I use daily with vuejs (jsx)

Currently in development.
It's more a list of ideas than a package for now. It can become a package if the helpers become very helpful. 

## Functional Component

I spend my day writing new vuejs component (with JSX). Most of the time those components are functional and only concists of some props and a render function. React allows a special declaration (a function that takes props as argument) that is more explicit and more concis. This helper create a Vuejs component according a render function and props.

### Example
```javascript
import {functionalComponent} from 'vuejs-helpers';


const MyComponent = h => ({prop1, prop2}) => (
  <div> Hello! My props are {prop1} and {prop2} </div>
);

const props = {
  prop1: {
    required: true,
    type: String
  },
  prop2: {
    required: true,
    type: String
  }
};

export default functionalComponent(MyComponent, props);
```

### API:
```javascript
type renderFnType: h => (props: Object, children: Array, scopedSlots: Object) => VNode 
function functionaComponent(renderFn: renderFnType, propType: Object, Component = {}: Object) => VueComponent
```


