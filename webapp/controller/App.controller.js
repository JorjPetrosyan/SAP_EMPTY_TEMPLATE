sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], function (Controller) {
    'use strict'
    return Controller.extend('sap.app.controller.App', {
        
        openDialog: function () {
            let oView = this.getView();

            console.log(oView.getId());
        } 
    })
})