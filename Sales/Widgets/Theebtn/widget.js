WAF.define('Theebtn', ['waf-core/widget'], function(widget) {
	
    var Theebtn = widget.create('Theebtn', {
        init: function() {
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });
//debugger;
			var that = this;
//			debugger;
//if(this.id == "component1_theebtn29"){
//	debugger;
//}
			if(this.useText()){
				$(this.node).css('width', 'auto')
				
				this.node.innerHTML = "<a href='#' class='threebtn_btn class_btn1 threebtn_clicked' id='"+this.id+"_btn1'>"+this.btn1label()+"</a>\
										<a href='#' class='threebtn_btn class_btn2' id='"+this.id+"_btn2'>"+this.btn2label()+"</a>";
				if(this.display3button()){
					this.node.innerHTML += "<a href='#' class='threebtn_btn class_btn3' id='"+this.id+"_btn3'> "+this.btn3label()+"</a>";
					
					
				}
				
			}
			else{
				this.node.innerHTML = "<a href='#' class='threebtn_btn class_btn1 threebtn_clicked' id='"+this.id+"_btn1'><i class='fa fa-plus'></i></a>\
										<a href='#' class='threebtn_btn class_btn2' id='"+this.id+"_btn2'><i class='fa fa-minus'></i></a>";
				if(this.display3button()){
					
					this.node.innerHTML += "<a href='#' class='threebtn_btn class_btn3' id='"+this.id+"_btn3'> <i class='fa fa-ban'></i></a>";
					
					this.width('60');
				}						
			}						
        
        	$(this.node).find(".class_btn1").on('click', function(event) {
//        		debugger;	
		     	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn1').addClass('threebtn_clicked');
		     	this.setValue();
		     	that.fire('clickButton1');
		    }.bind(this));	
		    
		    $(this.node).find(".class_btn2").on('click', function(event) {
		     	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn2').addClass('threebtn_clicked');
		     	this.setValue();
		     	that.fire('clickButton2');
		    }.bind(this));	
		    
		    $(this.node).find(".class_btn3").on('click', function(event) {
		     	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn3').addClass('threebtn_clicked');
		     	this.setValue();
		     	that.fire('clickButton3');
		    }.bind(this));	
		    
		    
        },
        
        
       
        
//        ,
        
//        /* Create a property */
//        test: widget.property({
//            onChange: function(newValue) {
//                this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
//            }
//        })
    });
	Theebtn.prototype.getValue = function(){
        	var $nod = $(this.node).find(".threebtn_clicked");
        	if($nod.hasClass('class_btn1')){
        		return this.btn1value();
        	};
        	if($nod.hasClass('class_btn2')){
        		return this.btn2value();
        	};
        	if($nod.hasClass('class_btn3')){
        		return this.btn3value();
        	};
        }
        
   Theebtn.prototype.setValue = function(newValue){
   			//debugger;
        	var $nod = $(this.node).find(".threebtn_clicked");
        	if($nod.hasClass('class_btn1')){
        		this.mysource(this.btn1value());
        	};
        	if($nod.hasClass('class_btn2')){
        		this.mysource(this.btn2value());
        	};
        	if($nod.hasClass('class_btn3')){
        		this.mysource(this.btn3value());
        	};
      }
             
//    /* Map the custom event above to the DOM click event */
//    Theebtn.mapDomEvents({
//        'click': 'action'
//    });

	   Theebtn.addProperty('mysource',{
	   
	   	onChange: function(newValue) {
//	   		debugger;
            if(newValue == this.btn1value()){
            	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn1').addClass('threebtn_clicked');
            }
            if(newValue == this.btn2value()){
            	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn2').addClass('threebtn_clicked');
            }
            if(newValue == this.btn3value()){
            	$('#'+this.id+' .threebtn_btn').removeClass('threebtn_clicked');
		     	$('#'+this.id+' .threebtn_btn.class_btn3').addClass('threebtn_clicked');
            }
        }
	   });
	   Theebtn.addProperty('btn1value', {
	   		type: 'string',
	   		defaultValue: 'Vrai'
	   });
	   Theebtn.addProperty('btn2value', {
	   		type: 'string',
	   		defaultValue: 'Faux'
	   });
	   Theebtn.addProperty('btn3value', {
	   		type: 'string',
	   		defaultValue: 'Null'
	   });
	    Theebtn.addProperty('display3button', {
	   		type: 'boolean',
	   		defaultValue: true
	   });
		Theebtn.addProperty('useText', {
	   		type: 'boolean',
	   		defaultValue: false
	   });
	   
	    Theebtn.addProperty('btn1label', {
	   		type: 'string',
	   		defaultValue: 'Oui'
	   });
	    Theebtn.addProperty('btn2label', {
	   		type: 'string',
	   		defaultValue: 'Non'
	   });
	    Theebtn.addProperty('btn3label', {
	   		type: 'string',
	   		defaultValue: 'Null'
	   });
	   
	   
    return Theebtn;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */