(function () {
  'use strict';

  window.MDA = window.MDA || {};

  /**
   * Animates elements inside given container using
   * overlapping motion method.
   *
   * @usage
   * MDA.overlappingMotion('.box-list', {
   *   delayFactor: 0.5,
   *   durationFactor: 1.3,
   *   inverted: false,
   *   elementSelector: '.item'
   * });
   *
   * @method overlappingMotion
   * @param  {String}          containerSelector                queryString selector
   * @param  {Object}          customSettings                   Settings object
   * @param  {Number}          customSettings.delayFactor       Factor for animation delay
   * @param  {Number}          customSettings.durationFactor    Factor for animation duration
   * @param  {String}          customSettings.elementSelector   queryString of elements inside the container
   * @param  {Boolean}         customSettings.inverted          Decides if show or hide animation should fire
   * @return {DOMElement}      Container element
   */
  MDA.overlappingMotion = function (containerSelector, customSettings) {
    this.container = document.querySelector(containerSelector);

    customSettings = customSettings || {};

    var settings = {
      delayFactor: customSettings.delayFactor || 0.5,
      durationFactor: customSettings.durationFactor || 1,
      elementSelector: customSettings.elementSelector || '.item',
      inverted: customSettings.inverted || false,
    };

    var childNodes = this.container.querySelectorAll(settings.elementSelector);

    Array.prototype.slice.call(childNodes).forEach(function(element) {
      let offset = element.offsetLeft + element.offsetTop;
      let delay = offset/1000;
      element.style.transitionDelay = delay * settings.delayFactor + 's';
      element.style.transitionDuration = delay * settings.durationFactor + 's';
      element.style.transform = 'scale(' + (settings.inverted ? 0 : 1) + ')';
    });

    return this.container;
  };
})();
