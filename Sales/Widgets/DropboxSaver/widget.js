WAF.define('DropboxSaver', function() {
    var Widget = WAF.require('waf-core/widget');
    var DropboxSaver = Widget.create('DropboxSaver');

    var saver, options;



    DropboxSaver.prototype.init = function() {
        if (this.options.appKey != '') {
            Dropbox.appKey = this.options.appkey;
        }
        else {
            throw "Dropbox Saver:Missing App Key";
        }
        $("#" + this.id).text('Dropbox Saver');
       
    };

   
    DropboxSaver.prototype.path = function(value) {
		var that = this;
        saver = Dropbox.createSaveButton({
            files: [{
                url: value
            }],
            success: function()
        	{
        		that.fire('dropboxSuccess')
        	},
        	cancel: function()
        	{
        		that.fire('dropboxCancel')
        	},
        	progress: function(p)
        	{
        		that.fire("dropboxProgress", {progress:p})
        	},
        	error:function(err)
        	{
        		that.fire("dropboxError", {error:err})
        	}
        });
        $("#" + this.id).html(saver);
    }

    DropboxSaver.makeBindableProperty('path', DropboxSaver.prototype.path);
   
    return DropboxSaver;
});

