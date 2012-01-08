pimcore.registerNS("pimcore.plugin.Events");

pimcore.plugin.Events = Class.create(pimcore.plugin.admin, {

    PimcoreKernelReady : function() {
        pimcore.globalmanager.get('event').on(pimcore.event.pimcoreLayoutToolbarRender, this.onLayoutToolbarRender.bind(this));
        pimcore.globalmanager.get('event').on(pimcore.event.pimcoreDocumentTreeContextMenuRender, this.onDocumentTreeContextMenuRender.bind(this));
        pimcore.globalmanager.get('event').on(pimcore.event.pimcoreDocumentTreeContextMenuRender, this.pimcoreDocumentTreeContextMenuRenderUnderPage.bind(this));
    },

    onLayoutToolbarRender: function (toolbar){
        var action = new Ext.Action({
            text: "My Plugin",
            iconCls:"fraud_check_menu_icon",
            handler: function() { alert('click'); }
        });

        toolbar.get('extras').menu.add(action);
      //  console.log(toolbar.get('extras').menu.get('redirects'));
        toolbar.get('extras').menu.insert(1, action); // adds as second menu entry
    },

    onDocumentTreeContextMenuRender : function(menu, documentId) {
        menu.add({
            text: "yea " +  documentId,
            iconCls: "pimcore_icon_email_add",
            handler: function() { alert('click!'); }
        });
    },

    pimcoreDocumentTreeContextMenuRenderUnderPage : function(menu, documentId) {
        menu.items.get('add_page').menu.add({
            text: "yea " +  documentId
        });
    }
});

new pimcore.plugin.Events();