WAF.define('Demo1', function() {
    var widget = WAF.require('waf-core/widget');
    var Demo1 = widget.create('Demo1');

//    Demo1.prototype.init = function() {
//        /* Initialize your widget here */

//        /* Fire a custom event */
//        this.fire('myEvent', {
//            message: 'Hello'
//        });
//    };

//    /* Add a new event that is fired when the widget is clicked */
//    Demo1.autoFireDomEvent('click', 'action');

//    /* Create a property */
//    Demo1.addProperty('test', {
//        onChange: function(newValue) {
//            this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
//        }
//    });

    return Demo1;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html