
define([],
  function () {

    const validAriaLiveValues = ['off', 'polite', 'assertive'];
    announce = function (message, manner) {

      if (manner == undefined || !validAriaLiveValues.includes(manner)) {
        manner = 'polite';
      }

      let params = {
        'bubbles': true,
        'detail': { 'message': message, 'manner': manner }
      };
      document.getElementById('globalBody').dispatchEvent(new CustomEvent('announce', params));
    }

    return { announce: announce };
  }
);
