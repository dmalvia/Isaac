/**
* plugin: panoviewer.js
**/

(function($){
  $.fn.panoviewer = function(options) {

    //panoviewer defaults config
    //ref: https://pannellum.org/documentation/reference/
    var panoviewerDefaults = {
      autoload: true, //data-autoload [bool]
      pitch: 0, //data-pitch [number]
      yaw: 0, //data-yaw [number]
      hfov: 100, //data-hfov [number]
      haov: 360, //data-haov [number]
      vaov: 180, //data-vaov [number]
      voffset: 0, //data-voffset [number]
      pan: 'both', //data-pan [string] : 'both', 'vertical', 'horizontal'
      minpitch: -85, //data-minpitch [number]
      maxpitch: 85, //data-maxpitch [number]
      minyaw: -360, //data-minyaw [number]
      maxyaw: 360 //data-maxyaw [number]
    };

    //plugin defaults config
    var pluginDefaults = {
      colorboxWidth: '800px',
      colorboxHeight: '600px'
  	};

	  var opts = $.extend({}, pluginDefaults, options);
    return this.each(function() {

      $(this).on('click', function(){
        if ( !$('#panoviewer').length )
          $('body').append('<div id="panoviewer"></div>');

        var data_pano = $('.panoviewer__init', this).data('pano') !== undefined && $('.panoviewer__init', this).data('pano') !== '' ? $('.panoviewer__init', this).data('pano') : console.log('no panorama image was specified'),
            data_autoload = $('.panoviewer__init', this).data('autoload') !== undefined && $('.panoviewer__init', this).data('autoload') !== '' ? $('.panoviewer__init', this).data('autoload') : panoviewerDefaults.autoload,
            data_pitch = $('.panoviewer__init', this).data('pitch') !== undefined && $('.panoviewer__init', this).data('pitch') !== '' ? $('.panoviewer__init', this).data('pitch') : panoviewerDefaults.pitch,
            data_yaw = $('.panoviewer__init', this).data('yaw') !== undefined && $('.panoviewer__init', this).data('yaw') !== '' ? $('.panoviewer__init', this).data('yaw') : panoviewerDefaults.yaw,
            data_hfov = $('.panoviewer__init', this).data('hfov') !== undefined && $('.panoviewer__init', this).data('hfov') !== '' ? $('.panoviewer__init', this).data('hfov') : panoviewerDefaults.hfov,
            data_haov = $('.panoviewer__init', this).data('haov') !== undefined && $('.panoviewer__init', this).data('haov') !== '' ? $('.panoviewer__init', this).data('haov') : panoviewerDefaults.haov,
            data_vaov = $('.panoviewer__init', this).data('vaov') !== undefined && $('.panoviewer__init', this).data('vaov') !== '' ? $('.panoviewer__init', this).data('vaov') : panoviewerDefaults.vaov,
            data_voffset = $('.panoviewer__init', this).data('voffset') !== undefined && $('.panoviewer__init', this).data('voffset') !== '' ? $('.panoviewer__init', this).data('voffset') : panoviewerDefaults.voffset;

        //panning options: (both / vertical / horizontal)
        var data_pan = $('.panoviewer__init', this).data('pan') !== undefined && $('.panoviewer__init', this).data('pan') !== '' ? $('.panoviewer__init', this).data('pan') : panoviewerDefaults.pan;
        if (data_pan == 'both') {
          data_minpitch = $('.panoviewer__init', this).data('minpitch') !== undefined && $('.panoviewer__init', this).data('minpitch') !== '' ? $('.panoviewer__init', this).data('minpitch') : panoviewerDefaults.minpitch;
          data_maxpitch = $('.panoviewer__init', this).data('maxpitch') !== undefined && $('.panoviewer__init', this).data('maxpitch') !== '' ? $('.panoviewer__init', this).data('maxpitch') : panoviewerDefaults.maxpitch;
          data_minyaw = $('.panoviewer__init', this).data('minyaw') !== undefined && $('.panoviewer__init', this).data('minyaw') !== '' ? $('.panoviewer__init', this).data('minyaw') : panoviewerDefaults.minyaw;
          data_maxyaw = $('.panoviewer__init', this).data('maxyaw') !== undefined && $('.panoviewer__init', this).data('maxyaw') !== '' ? $('.panoviewer__init', this).data('maxyaw') : panoviewerDefaults.maxyaw;
        } else if (data_pan == 'horizontal') {
          data_minpitch = 0;
          data_maxpitch = 0;
          data_minyaw = $('.panoviewer__init', this).data('minyaw') !== undefined && $('.panoviewer__init', this).data('minyaw') !== '' ? $('.panoviewer__init', this).data('minyaw') : panoviewerDefaults.minyaw;
          data_maxyaw = $('.panoviewer__init', this).data('maxyaw') !== undefined && $('.panoviewer__init', this).data('maxyaw') !== '' ? $('.panoviewer__init', this).data('maxyaw') : panoviewerDefaults.maxyaw;
        } else if (data_pan == 'vertical') {
          data_minpitch = $('.panoviewer__init', this).data('minpitch') !== undefined && $('.panoviewer__init', this).data('minpitch') !== '' ? $('.panoviewer__init', this).data('minpitch') : panoviewerDefaults.minpitch;
          data_maxpitch = $('.panoviewer__init', this).data('maxpitch') !== undefined && $('.panoviewer__init', this).data('maxpitch') !== '' ? $('.panoviewer__init', this).data('maxpitch') : panoviewerDefaults.maxpitch;
          data_minyaw = 0;
          data_maxyaw = 0;
        }

        //no webgl support
        if (Modernizr.webgl) {
          $(this).colorbox({
            inline: true,
            width: opts.colorboxWidth,
            height: opts.colorboxHeight,
            href: '#panoviewer',
            onComplete: function() {
              callPannellum();
            },
            onClosed: function(){
              $('#panoviewer').remove();
              destroyPannellum();
            }
          });
        } else {
          $(this).colorbox({
            width: opts.colorboxWidth,
            href: $('.panoviewer__init', this).data('static')
          });
        }

        //renders Pannellum
        function callPannellum(){
          pannellum.viewer('panoviewer', {
            "type": "equirectangular",
            "panorama": data_pano,
            "autoLoad": data_autoload,
            "pitch": data_pitch,
            "yaw": data_yaw,
            "hfov": data_hfov,
            "haov": data_haov,
            "vaov": data_vaov,
            "vOffset": data_voffset,
            "maxPitch": data_maxpitch,
            "minPitch": data_minpitch,
            "minYaw": data_minyaw,
            "maxYaw": data_maxyaw
          });
        }
        //destroys Pannellum
        function destroyPannellum(){
          pannellum.destroy;
        }
      });
    });
  };
})(jQuery);

// init panoviewer

$(document).ready(function () {
    $('.panoviewer .panoviewer__wrapper').panoviewer({
        colorboxWidth: '100%',
        colorboxHeight: '100%'
    });
});
