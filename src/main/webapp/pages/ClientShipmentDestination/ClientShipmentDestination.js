Application.$controller("ClientShipmentDestinationPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
        $scope.Widgets.containerHideClientShipment.show = false;
    };

    //To filter Client Shipment Destination grid
    $scope.btnQueryClientShpClick = function($event, $isolateScope) {
        $scope.Variables.svOC1000PK0_FREIGHTGetClientShp.invoke();
    };

    //To reset filter and grid
    $scope.btnRestQueryCliDestClick = function($event, $isolateScope) {
        $scope.Widgets.formQueryClientShp.formWidgets.searchClicod.datavalue = undefined;
        $scope.Widgets.formQueryClientShp.formWidgets.searchCligrp.datavalue = undefined;
        $scope.Widgets.formQueryClientShp.formWidgets.selectFreightTerm.datavalue = undefined;
        $scope.Widgets.formQueryClientShp.formWidgets.searchClicod.datavalue = null;
        $scope.Widgets.formQueryClientShp.formWidgets.searchCligrp.datavalue = null;
        $scope.Widgets.formQueryClientShp.formWidgets.selectFreightTerm.datavalue = null;
        $scope.Variables.svOC1000PK0_FREIGHTGetClientShp.dataSet = null;
    };

    //To collapse panel on success
    $scope.svOC1000PK0_FREIGHTGetClientShponSuccess = function(variable, data) {
        $scope.Widgets.panelClientShp.expanded = false;
    };

    //To fetch new insert data for client shipment dest and close the dialog
    $scope.svOC1000PK0_FREIGHTInsClientShponSuccess = function(variable, data) {
        $scope.Widgets.panelClientShp.expanded = true;
        $scope.Widgets.gridClientShipment.refreshData();
        $scope.Widgets.dialogInserClientShp.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Client Shipment Destination has been added.");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formQueryClientShp.resetForm();
        $scope.Widgets.formQueryClientShp.formWidgets.searchCligrp.datavalue = $scope.Widgets.formInsertClientShp.formWidgets.pCligrp.datavalue;
        $scope.Widgets.formQueryClientShp.formWidgets.searchClicod.datavalue = $scope.Widgets.formInsertClientShp.formWidgets.pClient.datavalue;
        $scope.Widgets.formQueryClientShp.formWidgets.selectFreightTerm.datavalue = $scope.Widgets.formInsertClientShp.formWidgets.pFreightTerm.datavalue;
        $scope.Widgets.formQueryClientShp.submit();
    };

    //To fetch update a row in the grid  for client shipment dest and close the dialog 
    $scope.svOC1000PK0_FREIGHTUpdClientShponSuccess = function(variable, data) {
        cgen.TableSetCurrentPage($scope.Widgets.gridClientShipment);
        $scope.Widgets.dialogUpdClientShp.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The selected row has been updated.");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryClientShpClick();
    };

    //To fetch delete a row in the grid  for client shipment dest and close the dialog
    $scope.svOC1000PK0_FREIGHTDelClientShponSuccess = function(variable, data) {
        $scope.Widgets.dialogInserClientShp.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The selected row has been deleted.");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryClientShpClick();
    };

    $scope.gridClientShipmentDatarender = function($isolateScope, $data) {
        cgen.TableGoToPage($scope.Widgets.gridClientShipment);
    };

}]);

Application.$controller("gridClientShipmentController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To open insert dialog and invoke client code lov 
        $scope.addNewRowAction = function($event) {
            $scope.Widgets.dialogInserClientShp.open();
            $scope.Variables.svRF2000PK0_OCLOVGetClicodLOVIns.invoke();
        };

        //To open  update dialog and invoke shipment destination lov 
        $scope.updaterowAction = function($event, $rowData) {
            $scope.Widgets.dialogUpdClientShp.open();
            $scope.Variables.svRF2000PK0_OCLOVGetShpDestLOV.invoke();
        };

        //To open confirm dialog
        $scope.deleterowAction = function($event, $rowData) {
            $scope.Widgets.confirmdialogDelClientShp.open();
        };
    }
]);

Application.$controller("dialogInserClientShpController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To insert a new row in the grid
        $scope.btnSaveClientShpClick = function($event, $isolateScope) {
            if (!($scope.Widgets.formInsertClientShp.formWidgets.pClient.datavalue === null)) {
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pClient", $scope.Widgets.formInsertClientShp.formWidgets.pClient.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pFreightTerm", $scope.Widgets.formInsertClientShp.formWidgets.pFreightTerm.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pFromCounty", $scope.Widgets.formInsertClientShp.formWidgets.pFromCounty.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pShpdest", $scope.Widgets.formInsertClientShp.formWidgets.pShpdest.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.setInput("pShpdestctycod", $scope.Widgets.formInsertClientShp.formWidgets.pShpdestctycod.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsClientShp.invoke();
            }
        };

        //To reset the forms
        $scope.btnResetClientShpClick = function($event, $isolateScope) {
            $scope.Widgets.formInsertClientShp.formWidgets.pClient.datavalue = undefined;
            $scope.Widgets.formInsertClientShp.formWidgets.pCligrp.datavalue = undefined;
            $scope.Widgets.formInsertClientShp.formWidgets.pFreightTerm.datavalue = undefined;
            $scope.Widgets.formInsertClientShp.formWidgets.pFromCounty.datavalue = undefined;
            $scope.Widgets.formInsertClientShp.formWidgets.pShpdest.datavalue = undefined;
            $scope.Widgets.formInsertClientShp.formWidgets.pShpdestctycod.datavalue = undefined;
        };
    }
]);

Application.$controller("dialogUpdClientShpController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To update the selected row
        $scope.btnUpdClientShpClick = function($event, $isolateScope) {
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pClient", $scope.Widgets.formUpdClientShp.formWidgets.pClient.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pSeqNr", $scope.Widgets.formUpdClientShp.formWidgets.pSeqNr.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pFreightTerm", $scope.Widgets.formUpdClientShp.formWidgets.pFreightTerm.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pShpdest", $scope.Widgets.formUpdClientShp.formWidgets.pShpdest.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.setInput("pShpdestctycod", $scope.Widgets.formUpdClientShp.formWidgets.pShpdestctycod.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTUpdClientShp.invoke();
        };

        //To reset the forms
        $scope.btnUpdResetClientShpClick = function($event, $isolateScope) {
            $scope.Widgets.formUpdClientShp.formWidgets.pClient.datavalue = undefined;
            $scope.Widgets.formUpdClientShp.formWidgets.pSeqNr.datavalue = undefined;
            $scope.Widgets.formUpdClientShp.formWidgets.pFreightTerm.datavalue = undefined;
            $scope.Widgets.formUpdClientShp.formWidgets.pShpdest.datavalue = undefined;
            $scope.Widgets.formUpdClientShp.formWidgets.pShpdestctycod.datavalue = undefined;
        };
    }
]);

Application.$controller("confirmdialogDelClientShpController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To delete the selected row
        $scope.confirmdialogDelClientShpOk = function($event, $isolateScope) {
            $scope.Variables.svOC1000PK0_FREIGHTDelClientShp.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOC1000PK0_FREIGHTDelClientShp.setInput("pClient", $scope.Widgets.gridClientShipment.selecteditem.clicod);
            $scope.Variables.svOC1000PK0_FREIGHTDelClientShp.setInput("pSeqNr", $scope.Widgets.gridClientShipment.selecteditem.seqnr);
            $scope.Variables.svOC1000PK0_FREIGHTDelClientShp.setInput("pFreightTerm", $scope.Widgets.gridClientShipment.selecteditem.freightTerm);
            $scope.Variables.svOC1000PK0_FREIGHTDelClientShp.invoke();
        };
    }
]);