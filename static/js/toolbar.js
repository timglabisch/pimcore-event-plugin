pimcore.registerNS("pimcore.plugin.Events");

pimcore.plugin.Events = Class.create(pimcore.plugin.admin, {

    PimcoreKernelReady : function() {
        pimcore.on(pimcore.event.pimcore.layout.toolbar.render, this.onLayoutToolbarRender.bind(this));
        pimcore.on(pimcore.event.pimcore.document.tree.node.contextMenu.render, this.onDocumentTreeContextMenuRender.bind(this));
        pimcore.on(pimcore.event.pimcore.document.tree.node.contextMenu.render, this.pimcoreDocumentTreeContextMenuRenderUnderPage.bind(this));
        pimcore.on(pimcore.event.pimcore.object.tree.node.contextMenu.render, this.pimcoreObjectTreeContextMenu.bind(this));
        pimcore.on(pimcore.event.pimcore.asset.tree.node.contextMenu.render, this.pimcoreAssetTreeContextMenu.bind(this));
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
    },

    pimcoreObjectTreeContextMenu : function(menu, objectId) {
        menu.add({
            text: "yea " +  objectId,
            iconCls: "pimcore_icon_email_add",
            handler: function() { alert('click!'); }
        });
    },

    pimcoreAssetTreeContextMenu : function(menu, objectId) {
        menu.add({
            text: "yea " +  objectId,
            iconCls: "pimcore_icon_email_add",
            handler: function() { alert('click!'); }
        });
    }
});

new pimcore.plugin.Events();