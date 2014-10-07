## Custom Widget for [Wakanda](http://wakanda.org)
The __DropBoxSaver__ widget is simple implementation of Dropbox Saver Drop-in, for more details please see https://www.dropbox.com/developers/dropins/saver. 


### Properties
This __DropboxSaver__ widget has the following properties: 

* __AppKey__: Which you can get by creating a drop-in app here: https://www.dropbox.com/developers/apps/create
* __File URL__: Datasource attribute that holds the URL to the file.

### Events:

This __DropboxSaver__ widget has 4 Events:

* __On Progress__: called periodically to update the application on the progress of the user’s download. The only value passed to it is a float value between 0 and 1 indicating download progress. (event.data.progress is the value)

* __On Success__: called when files are successfully added to the user’s Dropbox, although they may not have synced to the user’s devices yet.

* __Cancel__: called if the user cancels the Saver or closes the dialog window.

* __On Error__: called in the event of an unexpected response from your server, such as not being able to find the file, or if there is an error on Dropbox, such as the user being over quota. (event.data.error contains the error message)

### Goals
The __DropboxSaver__ is the easiest way to add files to your users' Dropboxes. With two clicks, a user can download files of any size into their Dropbox, making those files available on all their computers and devices as soon as the download completes. The Saver is a Drop-in component that works on web and mobile web—all with just a few lines of code.



### Wakanda Studio

Model
```
1. Create a datasource  D
2. Add attribute string S1
4. save your model. 

```

Custom Widget
```
1. Drag the widget to your Wakanda page. 
2. A Text Label saying "Dropbox saver" should appear.
3. Drop the datasource string attribute S1 inside the widget or change the property's panel Datasource File URI, and put your AppKey in the App Key field.
4. save your page
5. run your page 
6. Saver Button with dropbox icon will appear, click it and it will open a popup asking you to login an give permissions, then click save.
7. Check your Dropbox folder, the file (specified in the FileURI attribute) should be there. 
 
```

### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
