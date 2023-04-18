
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of a Sphere.
 */
function calculate () {
  // input
  let fahrenheit = parseInt(document.getElementById('fahrenheit').value);

  // process
  let celsius = 5/9*(fahrenheit-32);

  // output
  document.getElementById('volume').innerHTML = 'Temperature is: ' + celsius.toFixed(2) + ' degrees celsius'
}
