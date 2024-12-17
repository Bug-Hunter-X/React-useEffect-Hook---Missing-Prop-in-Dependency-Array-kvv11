# React useEffect Hook - Missing Prop in Dependency Array

This repository demonstrates a common error in React's `useEffect` hook: omitting a prop from the dependency array. This can lead to unexpected behavior where the effect doesn't run when a prop changes, only when a state variable changes.

## Bug Description

The `MyComponent` component uses `useEffect` to update a count every second.  However, if the component receives a prop that should trigger an update, the effect won't re-run because the prop is not included in the dependency array.

## Solution

The solution involves adding the prop to the dependency array, ensuring that the effect runs whenever the prop changes.  This ensures the component correctly reacts to prop updates.