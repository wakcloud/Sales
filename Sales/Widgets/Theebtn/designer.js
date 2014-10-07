(function(Theebtn) {

//    /* Default width and height of your widget */

    Theebtn.setWidth('40');
    Theebtn.setHeight('21');
    

//    /* Define custom event for your widget */
    	Theebtn.addEvent({
		    'name':'clickButton1',
		    'description':'On Click Button1',
		    'category':'Buttons Events'
		});
		Theebtn.addEvent({
		    'name':'clickButton2',
		    'description':'On Click Button2',
		    'category':'Buttons Events'
		});
		Theebtn.addEvent({
		    'name':'clickButton3',
		    'description':'On Click Button3',
		    'category':'Buttons Events'
		});
//    /* Customize existing properties */
//    Theebtn.customizeProperty('test', {
//        sourceTitle: 'Test Source',
//        title: 'Test Static Value',
//        description: 'Add a datasource to this property.'
//    });

		Theebtn.customizeProperty('btn1value', {
		    sourceTitle: '',
		    title: 'Button 1 Value',
		    display: true,
		    sourceDisplay: false
		});

		Theebtn.customizeProperty('btn2value', {
		    sourceTitle: '',
		    title: 'Button 2 Value',
		    display: true,
		    sourceDisplay: false,
		    defaultValue: "Faux"
		});

		Theebtn.customizeProperty('btn3value', {
		    sourceTitle: '',
		    title: 'Button 3 Value',
		    display: true,
		    sourceDisplay: false
		});
		
		Theebtn.customizeProperty('display3button', {
		    sourceTitle: '',
		    title: 'Display the 3rd button',
		    display: true,
		    sourceDisplay: false
		});
		
		Theebtn.customizeProperty('useText', {
		    sourceTitle: '',
		    title: 'Use Labels',
		    display: true,
		    sourceDisplay: false
		});

		Theebtn.customizeProperty('btn1label', {
		    sourceTitle: '',
		    title: 'Button 1 Label',
		    display: true,
		    sourceDisplay: false
		});
		
		Theebtn.customizeProperty('btn2label', {
		    sourceTitle: '',
		    title: 'Button 2 Label',
		    display: true,
		    sourceDisplay: false
		});
		
		Theebtn.customizeProperty('btn3label', {
		    sourceTitle: '',
		    title: 'Button 3 Label',
		    display: true,
		    sourceDisplay: false
		});

//    /* Add a Label property */
//    Theebtn.addLabel({
//        'defaultValue': '',
//        'position': 'top'
//    });

//    /* Set the Design and Styles panels */
//    Theebtn.setPanelStyle({
//        'fClass': true,
//        'text': true,
//        'background': true,
//        'border': true,
//        'sizePosition': true,
//        'label': true,
//        'disabled': ['border-radius']
//    });

//    /* Override widget's initialization */
//    Theebtn.prototype.init = function() {
//        this.node.innerHTML = "Widget Text"; /* Include text inside the widget */
//    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html