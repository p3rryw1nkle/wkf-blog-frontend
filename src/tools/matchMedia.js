// This is a custom hook that uses the matchMedia API to determine if the screen width is greater than a specified value.

import { useState, useEffect, useRef } from 'react';

// the cut-off value for what screen width will trigger a component resize is passed in as a prop.
const useMatchMedia = (width = 600) => { // by default it is 600
    const [toggleChange, setToggleChange] = useState(false)
    const matchMediaRef = useRef(null)

    useEffect(() => {
        // Create a new matchMedia object with the specified width
        matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`)
        const initialMatch = matchMediaRef.current.matches

        // Set the initial state of toggleChange based on the screen size
        if (initialMatch) {
            setToggleChange(true)
        } else {
            setToggleChange(false)
        }

        // Define a callback function to handle changes to the screen size
        const test = event => {
            if (event.matches) {
                setToggleChange(true)
            } else {
                setToggleChange(false)
            }
        }

        // Add the callback function as a listener for changes to the screen size
        matchMediaRef.current.addListener(test)

        // Remove the listener when the component unmounts
        return () => {
            matchMediaRef.current.removeListener(test)
        } 

    }, [width])

    // Return the current state of toggleChange
    return toggleChange
}

export default useMatchMedia
