(function(DropboxSaver) {

    //      /*Display name of the widget*/
    DropboxSaver.setDescription('DropboxSaver');

    //      /*Define your widget's properties*/
    DropboxSaver.addAttributes([{
        name: 'data-appKey',
        description: 'App Key'
    },

    {
        name: 'data-binding-path',
        description: 'File URL Attribute',
        typeValue: 'datasource'
    }]);

    //      /*Default width and height of your widget when added to the Page*/
    DropboxSaver.setWidth('150');
    DropboxSaver.setHeight('20');

    //      /*Define the events for your widget*/
    	DropboxSaver.addEvent({
    		'name':'dropboxProgress',
    		'description':'On Progress',
    		'category': 'General'
    	});
    	
    	DropboxSaver.addEvent({
    		'name':'dropboxSuccess',
    		'description':'On Success',
    		'category': 'General'
    	});
    	
    	DropboxSaver.addEvent({
    		'name':'dropboxCancel',
    		'description':'On Cancel',
    		'category': 'General'
    	});
    	
    	DropboxSaver.addEvent({
    		'name':'dropboxError',
    		'description':'On Error',
    		'category': 'General'
    	});
   
    DropboxSaver.on('Display', function(event) {
        studio.alert("init");
    });
    DropboxSaver.on('resize', function(event) {
        studio.alert("init");
    });

});

