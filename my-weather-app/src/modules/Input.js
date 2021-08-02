import React from 'react';

const Input = props =>
  <form>
    <input type='text' placeholder='Enter City Name...' onKeyDown={props.queryWeather}/>
  </form>

export default Input;