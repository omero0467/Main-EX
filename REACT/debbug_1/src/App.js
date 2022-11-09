// import { useState } from 'react';
import './styles.css';
import Action from './action';
import LargeHeading from './components/LargeHeading';
import MediumHeading from './components/MediumHeading';

export default function App() {
  const terminator = 'Bob';

  return (
    <div className='App'>
      <LargeHeading>My name is {terminator} and I'm the exterminator</LargeHeading>
      <MediumHeading text={'Click and see me in action'}  action={Action}/>
    </div>
  );
}
/**
 * Task 1
 * The design on the site is not working, fix it.
 */
/**
 * Task 2
 * Is there anything in the content that is displayed incorrectly?
 * If so, fix it and ask yourself if you can do it better next time
 */

/** Task 3
 *
 * Our app is designed to perform a certain action, what is it and why is it not working?
 */
