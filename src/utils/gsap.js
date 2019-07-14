import {TimelineLite, Ease, Power4} from "gsap"

/**
 * Feed in the starting ease and the ending ease (and optionally an ease to do ﻿the blending), and it'll return a new Ease that's...blended!
 * @param startEase
 * @param endEase
 * @param blender
 * @returns {Window.GreenSockGlobals.Ease}
 */
export function blendEases(startEase, endEase, blender) {﻿
  blender = blender || Power4.easeInOut;
  return new Ease(function (v) {
    var b = blender.getRatio(v);
    return startEase.getRatio(v) * (1 - b) + endEase.getRatio(v) * b;
  });
}

/**
 * Randomly pluck values from an array one-by-one until they've all been plucked (almost as if when you pluck one,
 * it's no longer available to be plucked again until ALL of them have been uniquely plucked):
 * @param array
 * @returns {*|T}
 */
export function pluckRandomFrom(array) {
  if (!array.eligible || array.eligible.length === 0) {
    array.eligible = array.slice(0); //make a copy, attach it as "eligible" property
    array.eligible.sort(function () {
      return 0.5 - Math.random();
    }); //shuffle
  }
  return array.eligible.pop();
}

/**
 * This is the function that does all the magic. Copy this to your project. Pass in the elements (selector text
 * or NodeList or array), then a function/callback that actually makes your DOM changes, and optionally a vars
 * object that contains any of the following properties to customize the transition:
 *
 * - duration [Number] - duration (in seconds) of each animation
 * - stagger [Number | Object | Function] - amount to stagger the starting time of each animation. You may use advanced staggers too (see https://codepen.io/GreenSock/pen/jdawKx)
 * - ease [Ease] - controls the easing of the animation. Like Power2.easeInOut, or Elastic.easeOut, etc.
 * - onComplete [Function] - a callback function that should be called when all the animation has completed.
 * - delay [Number] - time (in seconds) that should elapse before any of the animations begin.
 *
 * This function will return a TimelineLite containing all the animations.
 * @param elements
 * @param changeFunc
 * @param vars
 * @returns {Window.GreenSockGlobals.TimelineLite}
 */
export function flip(elements, changeFunc, vars) {
  if (typeof (elements) === "string") {
    elements = document.querySelectorAll(elements);
  }
  vars = vars || {};
  var bounds = [],
      tl = new TimelineLite({onComplete: vars.onComplete, delay: vars.delay || 0}),
      duration = vars.duration || 1,
      copy = {cycle: vars.cycle || {}},
      i, b, p;
  for (i = 0; i < elements.length; i++) {
    bounds[i] = elements[i].getBoundingClientRect();
  }
  changeFunc();
  for (p in vars) {
    if (p !== "duration" && p !== "onComplete" && p !== "delay") {
      copy[p] = vars[p];
    }
  }
  copy.cycle.x = function (i, element) {
    return "-=" + (element.getBoundingClientRect().left - bounds[i].left);
  };
  copy.cycle.y = function (i, element) {
    return "-=" + (element.getBoundingClientRect().top - bounds[i].top);
  }
  tl.staggerFrom(elements, vars.duration || 1, copy);
  return tl;
}

/**
 * If you want to change transformOrigin dynamically without a jump, you'd need to compensate its translation (x/y).
 * @param element
 * @param transformOrigin
 */
export function smoothOriginChange(element, transformOrigin) {
  if (typeof (element) === "string") {
    element = document.querySelector(element);
  }
  var before = element.getBoundingClientRect();
  element.style.transformOrigin = transformOrigin;
  var after = element.getBoundingClientRect();
  TweenLite.set(element, {
    x: "+=" + (before.left - after.left),
    y: "+=" + (before.top - after.top)
  });
}