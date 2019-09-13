# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library created by Facebook. React helps build large scalable apps quickly. It helps in building the small reusable components. The main problem it solves is the ever changing data for a user to display. Instead of changing the entire page or reloading the entire DOM it passed the changes to the virtual DOM which in turn just changes the data that has to be changed.

1. What does it mean to think in react?

Thinking in react means thinking in components i.e. which components are required for the webpage, which components will be the parent component that is hold the state and pass it as needed.

1. Describe state.

State is data that is rendered. When data is changed it means the state has been changed.

1. Describe props.

Props are the arguments which is passed to the child components through which the parent passes data to the child.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are things that happen outside the scope of the function like api calls, console.log etc. We use useEffect hook.
