WAF.define('Select2', ['waf-core/widget'], function(widget) {

    var Select2 = widget.create('Select2', {
        items: widget.property({
            type: 'datasource',
            attributes: [{
                name: 'id'
            }, {
                name: 'text'
            }, {
                name: 'group'
            }]
        }),

        init: function() {
            var self = this;
            var isGroupingNeeded = !! this.items.attributeFor('group');
            this.node.innerHTML = '<input />';
            this.$selectNode = $('input', this.node);
            this.$selectNode.select2({
                data: [],
                width: '100%'
            });

            this.$selectNode.on({
                "change": function(e) {
                    subscriber.pause();
                    self.items().selectByKey(e.val);
                    subscriber.resume();
                    self.fire("change", e.data);
                },
                "select2-opening": function(e) {
                    self.fire('opening', e.data);
                },
                "select2-open": function(e) {
                    self.fire('open', e.data);
                },
                "select2-highlight": function(e) {
                    self.fire('highlight', e.data);
                },
                "select2-selecting": function(e) {
                    self.fire('selecting', e.data);
                },
                "select2-focus": function(e) {
                    self.fire('focus', e.data);
                },
                "select2-blur": function(e) {
                    self.fire('blur', e.data);
                }
            });

            function formatedGroup(elements) {
                var data = [];
                var group;
                var groups = [];
                for (var i = 0, len = elements.length; i < len; i++) {
                    group = elements[i].group;

                    var index = function(groups, group) {
                            for (var j = 0, len = groups.length; j < len; j++) {
                                if (groups[j].text == group) return j;
                            }
                            return -1;
                        }(groups, group);


                    if (index !== -1) {
                        groups[index].children.push({
                            id: elements[i].id,
                            text: elements[i].text,
                        });
                    }
                    else {
                        groups.push({
                            text: group,
                            children: [{
                                id: elements[i].id,
                                text: elements[i].text,
                            }]
                        });
                    }
                }
                return groups;
            }
            this.items.onCollectionChange(function(elements) {
                if (!elements.length) return;
                var data;

                if (isGroupingNeeded) {
                    data = formatedGroup(elements);
                    self.$selectNode.select2({
                        width: 'element',
                        data: data
                    });
                }
                else {
                    self.$selectNode.select2({
                        width: 'element',
                        data: elements
                    });
                }

                var id = self.items().ID;
                self.$selectNode.select2("val", id);
            });

            if (this.items()) {
                var subscriber = this.items().subscribe('currentElementChange', function(e) {
                    var id = self.items().ID;
                    if (id) {
                        self.$selectNode.select2("val", id);
                    }
                });
            }

        },

        open: function() {
            this.$selectNode.select2('open');
        },

        close: function() {
            this.$selectNode.select2('close');
        },

        enable: function() {
            this.$selectNode.select2("enable", true);
        },

        disable: function() {
            this.$selectNode.select2("enable", false);
        },

        selectedData: function() {
            return this.$selectNode.select2('data');
        }
    });

    return Select2;

});