$(document).ready(function() {
    initPwcForms();
    initDatePicker();
});

function initDatePicker(elementId) {
    // Decide whether to use native or JavaScipt datapicker
    var hasTouch = Modernizr.touchevents;
    var hasNativeDate = Modernizr.inputtypes.date;
    var useNativeDatePicker = hasTouch && hasNativeDate;

    if(!useNativeDatePicker) {
        console.log('Use JavaScript date picker');
        $('.pwc-form-datepicker').each(function(index) {
            var dateElements = {};
            var $this = $(this).find("input[type=date]");
            var elementId = $this.attr('id');

            //Remove browser date field type
            $this.attr('type', 'text');

            //Setup JavaScript data picker

            var placeholder = $this.attr('placeholder');

            var placeholderSplit = placeholder.split("/");
            var dateString = "";
            
            for(var i = 0; i < 3; i++ ) {
                
                var nextDate;

                switch(placeholderSplit[i]) {
                    case "MM":
                        nextDate = "%m";
                        break;

                    case "DD":
                        nextDate = "%d";
                        break;
                         
                    case "YYYY":
                        nextDate = "%Y";
                        break;

                }
                dateString += nextDate;

                if(i < 2) {
                    dateString += "/";
                }
            }
            
            dateElements[elementId] = dateString;
            datePickerController.createDatePicker({                  
                formElements: dateElements,
                noFadeEffect: true,
                labelText: "",
                fillGrid:true
            }); 
        });

    } 
}

function initPwcForms() {
    //Focus helper
    var focusedLabelID;
    $('.pwc-forms label').on('click',function() {
       focusedLabelID = $(this).attr('for');
       $('#'+focusedLabelID).trigger('focus');
    });

    // Password 
    $(".show-pass").change(function() {
        var $checkbox = $(this);
        if($checkbox.is(":checked")) {

            var fieldId = $checkbox.attr("data-field-id");
            // Pass            
            $("#" + fieldId).hide();
            var val = $("#" + fieldId).val();

            // Text
            $("#" + fieldId + "_text").show();
            $("#" + fieldId + "_text").val(val);
        } else {
            var fieldId = $checkbox.attr("data-field-id");
            // Text
            $("#" + fieldId + "_text").hide();
            var val = $("#" + fieldId + "_text").val();

            // Pass            
            $("#" + fieldId).show();
            $("#" + fieldId).val(val);
        }        
    });
}