Application.$controller("FreightStandardCostPageController", ["$scope", function($scope) {
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
         
         //jl13 26/04/2019 add undefined to qtyomupd LOV databinding
         */
        $scope.Widgets.containerHideLabelFreight.show = false;
        $scope.Widgets.containerHideLabelCost.show = false;
        $scope.Widgets.containerHideFromTo.show = false;
    };

    //To call LOV when selecting tab
    $scope.tabpaneLOVSelect = function($event, $isolateScope) {
        $scope.Variables.svRF2000PK0_OCLOVGetAllLOV.invoke();
    };

    //To call LOV when selecting tab and enable Panel
    $scope.tabpaneFreightDetailSelect = function($event, $isolateScope) {
        $scope.Variables.svRF2000PK0_ORLOVGetOrdCtycodLOV.invoke();
        $scope.Variables.svRF2000PK0_OCLOVGetShpTypLOV.invoke();
        $scope.Widgets.panelFreightDetails.expanded = true;
    };

    //To call LOV when selecting tab and enable Panel
    $scope.tabpaneFeightDetailCostSelect = function($event, $isolateScope) {
        $scope.Variables.svRF2000PK0_ORLOVGetOrdCtycodLOV.invoke();
        $scope.Variables.svRF2000PK0_OCLOVGetShpTypLOV.invoke();
        $scope.Widgets.panelCostDetails.expanded = true;
    };

    //To call LOV when selecting tab and enable Panel
    $scope.tabpaneFreighTermsSelect = function($event, $isolateScope) {
        $scope.Variables.svRF2000PK0_OCLOVGetFreightTermsLOV.invoke();
        $scope.Variables.svRF2000PK0_OCLOVGetItemCatLOV.invoke();
        $scope.Widgets.panelFreightTerms.expanded = true;
    };

    //To query LOV Details
    $scope.btnQueryLOVClick = function($event, $isolateScope) {
        $scope.Variables.svOC1000PK0_FREIGHTGetAllLOV.invoke();
    };

    // To Reset LOV Filter
    $scope.btnRestLOVClick = function($event, $isolateScope) {
        $scope.Widgets.selectLOV.datavalue = undefined;
        $scope.Widgets.selectFronCountryLOV.datavalue = undefined;
        $scope.Widgets.searchToDestCountryLOV.datavalue = undefined;
        $scope.Widgets.selectLOV.datavalue = null;
        $scope.Widgets.selectFronCountryLOV.datavalue = null;
        $scope.Widgets.searchToDestCountryLOV.datavalue = null;
        $scope.Variables.svOC1000PK0_FREIGHTGetAllLOV.dataSet = null;
    };

    //To query Freight Details
    $scope.btnQueryFreightClick = function($event, $isolateScope) {
        $scope.Variables.svOC1000PK0_FREIGHTGetFreightDetails.invoke();
    };

    // To Reset Freight Filter
    $scope.btnResetQueryFreightClick = function($event, $isolateScope) {
        $scope.Widgets.formFreightQuery.formWidgets.selectFromCountryQuery.datavalue = undefined;
        $scope.Widgets.formFreightQuery.formWidgets.searchToDestCountryQuery.datavalue = undefined;
        $scope.Widgets.formFreightQuery.formWidgets.selectShptypQuery.datavalue = undefined;
        $scope.Widgets.formFreightQuery.formWidgets.selectFromCountryQuery.datavalue = null;
        $scope.Widgets.formFreightQuery.formWidgets.searchToDestCountryQuery.datavalue = null;
        $scope.Widgets.formFreightQuery.formWidgets.selectShptypQuery.datavalue = null;
        $scope.Variables.svOC1000PK0_FREIGHTGetFreightDetails.dataSet = null;
    };

    //To collapse the panel and reset filter
    $scope.svOC1000PK0_FREIGHTGetFreightDetailsonSuccess = function(variable, data) {
        $scope.Widgets.panelFreightDetails.expanded = false;
    };

    //To filter Freight and Cost details
    $scope.btnQueryCostClick = function($event, $isolateScope) {
        $scope.Variables.svOC1000PK0_FREIGHTGetCostDetails.invoke();
    };

    //To Reset Cost Filter
    $scope.btnResetQueryCostClick = function($event, $isolateScope) {
        $scope.Widgets.formCostQuery.formWidgets.selectFromCountryCost.datavalue = undefined;
        $scope.Widgets.formCostQuery.formWidgets.searchToDestCountryCost.datavalue = undefined;
        $scope.Widgets.formCostQuery.formWidgets.selectShptyp.datavalue = undefined;
        $scope.Widgets.formCostQuery.formWidgets.selectFromCountryCost.datavalue = null;
        $scope.Widgets.formCostQuery.formWidgets.searchToDestCountryCost.datavalue = null;
        $scope.Widgets.formCostQuery.formWidgets.selectShptyp.datavalue = null;
        scope.Variables.svOC1000PK0_FREIGHTGetCostDetails.dataSet = null;
    };

    //To collapse the panel and reset filter
    $scope.svOC1000PK0_FREIGHTGetCostDetailsonSuccess = function(variable, data) {
        $scope.Widgets.panelCostDetails.expanded = false;
        //$scope.btnResetQueryCostClick();
    };

    $scope.btnQueryTermsClick = function($event, $isolateScope) {
        $scope.Variables.svOC1000PK0_FREIGHTGetFreightTerm.invoke();
    };

    //To Rest Freight Term
    $scope.btnResetQueryTermsClick = function($event, $isolateScope) {
        $scope.Widgets.formFreightTerm.formWidgets.selectFreighTerm.datavalue = undefined;
        $scope.Widgets.formFreightTerm.formWidgets.selectShpItemCat.datavalue = undefined;
        $scope.Widgets.formFreightTerm.formWidgets.selectFreighTerm.datavalue = null;
        $scope.Widgets.formFreightTerm.formWidgets.selectShpItemCat.datavalue = null;
        $scope.Variables.svOC1000PK0_FREIGHTGetFreightTerm.dataSet = null;
    };

    //To collapse the panel and reset filter
    $scope.svOC1000PK0_FREIGHTGetFreightTermonSuccess = function(variable, data) {
        $scope.Widgets.panelFreightTerms.expanded = false;
        //$scope.btnResetQueryTermsClick();
    };

    //To fetch new insert data for freight details and close the dialog
    $scope.svOC1000PK0_FREIGHTInsFreightDetailsonSuccess = function(variable, data) {
        $scope.Widgets.panelFreightDetails.expanded = true;
        $scope.Widgets.gridFreightDetails.refreshData();
        $scope.Widgets.dialogInsertFreightDetails.close();
        $scope.Widgets.gridFreightDetails.refreshData();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Freight Details have been added");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formFreightQuery.resetForm();
        $scope.Widgets.formFreightQuery.formWidgets.selectFromCountryQuery.datavalue = $scope.Widgets.formInsertFreightDetails.formWidgets.selectFromCountry.datavalue;
        $scope.Widgets.formFreightQuery.formWidgets.searchToDestCountryQuery.datavalue = $scope.Widgets.formInsertFreightDetails.formWidgets.searchToDestCountry.datavalue;
        $scope.Widgets.formFreightQuery.formWidgets.selectShptypQuery.datavalue = $scope.Widgets.formInsertFreightDetails.formWidgets.selectShipmentType.datavalue;
        $scope.Widgets.formFreightQuery.submit();
    };

    //Error Message
    $scope.svOC1000PK0_FREIGHTInsFreightDetailsonError = function(variable, data) {
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    //To delete selected row
    $scope.svOC1000PK0_FREIGHTDelFreightDetailsonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The row selected has been deleted.");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryFreightClick();
    };

    //Error Message
    $scope.svOC1000PK0_FREIGHTDelFreightDetailsonError = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The row selected has been cancel");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryCostClick();
    };

    //To fetch new insert data for cost and freight detail and close the dialog
    $scope.svOC1000PK0_FREIGHTInsCostDetailsonSuccess = function(variable, data) {
        $scope.Widgets.panelCostDetails.expanded = true;
        $scope.Widgets.gridCostDetails.refreshData();
        $scope.Widgets.dialogInsertCostDetails.close();

        $scope.Variables.svOC1000PK0_FREIGHTGetCostDetails.invoke();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Freight and Cost details have been added");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formCostQuery.resetForm();
        $scope.Widgets.formCostQuery.formWidgets.selectFromCountryCost.datavalue = $scope.Widgets.formInsertCostDetails.formWidgets.pCtycod.datavalue;
        $scope.Widgets.formCostQuery.formWidgets.searchToDestCountryCost.datavalue = $scope.Widgets.formInsertCostDetails.formWidgets.pShpdestctycod.datavalue;
        $scope.Widgets.formCostQuery.formWidgets.selectShptyp.datavalue = $scope.Widgets.formInsertCostDetails.formWidgets.pShpTyp.datavalue;
        $scope.Widgets.formCostQuery.submit();
    };

    //Error Message
    $scope.svOC1000PK0_FREIGHTInsCostDetailsonError = function(variable, data) {
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    //To fetch update data for cost and freight detail and close the dialog
    $scope.svOC1000PK0_FREIGHTUpdCostDetailsonSuccess = function(variable, data) {
        cgen.TableSetCurrentPage($scope.Widgets.gridCostDetails);
        $scope.Widgets.dialogUpdateCostDetails.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The row selected has been updated");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryCostClick();
    };

    //Error Message
    $scope.svOC1000PK0_FREIGHTUpdCostDetailsonError = function(variable, data) {
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    //To cancel a row (update sts to 'C')
    $scope.svOC1000PK0_FREIGHTCancelCostDetailsonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("The row selected has been cancel");
        $scope.Variables.notifMsg.notify();
        $scope.btnQueryCostClick();
    };

    //Error Message
    $scope.svOC1000PK0_FREIGHTCancelCostDetailsonError = function(variable, data) {
        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    $scope.svRF2000PK0_OCLOVGetCurrencyLOVonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pFCountry == undefined || inputData.pTCountry == undefined)) {
            return false;
        }
    };

    $scope.svRF2000PK0_OCLOVGetQtyUomLOVonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pCalcMethod == undefined)) {
            return false;
        }
    };

    $scope.svRF2000PK0_OCLOVGetQtyUomLOVUpdonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pCalcMethod == undefined)) {
            return false;
        }
    };

    $scope.svRF2000PK0_OCLOVGetCurrencyLOVUpdonBeforeUpdate = function(variable, inputData) {
        if ((inputData.pFCountry == undefined || inputData.pTCountry == undefined)) {
            return false;
        }
    };
    $scope.svRF2000PK0_OCLOVGetCalcTotalLOVonSuccess = function(variable, data) {
        $scope.Variables.statCalcTotal.dataSet = data.poutCalcTotalLov;
        $scope.Variables.statCalcTotal.dataSet.push({
            "calctotal": ""
        });
    };

    $scope.gridCostDetailsDatarender = function($isolateScope, $data) {
        cgen.TableGoToPage($scope.Widgets.gridCostDetails);
    };

    $scope.svRF2000PK0_OCLOVGetCalcMethodLOVUpdonSuccess = function(variable, data) {
        cgen.WM.SetWidgetValue($scope.Widgets.formUpdateCost.formWidgets.pCalcmethod, $scope.Widgets.gridCostDetails.selecteditem.calcmethod, "calcmethod");
        $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOVUpd.invoke();
    };

    //To show percentage when itemdes3(rangehide) =  'Y' // To hide Percentage itemdes2(percentagegide) = 'Y' and Qty From and To, to have default value (0-9999) when not itemdes2(percentagehide) != 'Y' on success
    //Automatically populate the qtyuom 
    $scope.svRF2000PK0_OCLOVGetQtyUomLOVonSuccess = function(variable, data) {
        cgen.WM.SetWidgetValue($scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM, $scope.Widgets.formInsertCostDetails.formWidgets.pCalcMethod.datavalue.qtyuom, "qtyuom");

        $scope.Widgets.containerHideEqualPC.show = true;
        if ($scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue.rangehide == 'Y') {
            $scope.Widgets.containerPercentage.show = true;
            $scope.Widgets.containerHideEqualPC.show = false;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCurPerUnit.datavalue = 0;
        }
        if ($scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue.percentagehide == 'Y') {
            $scope.Widgets.containerQuantityRange.show = true;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = 0;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = 0;
        } else {
            $scope.Widgets.containerQuantityRange.show = false;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = 0;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = 99999;
        }
        $scope.Variables.svRF2000PK0_OCLOVGetCurrencyLOV.invoke();
    };

    //To show percentage when itemdes3(rangehide) = 'Y' // To hide Percentage when itemdes2(percentagehide) = 'Y' on success
    //Automatically populate the qtyuom 
    $scope.svRF2000PK0_OCLOVGetQtyUomLOVUpdonSuccess = function(variable, data) {
        cgen.WM.SetWidgetValue($scope.Widgets.formUpdateCost.formWidgets.pQtyUom, $scope.Widgets.formUpdateCost.formWidgets.pCalcmethod.datavalue.qtyuom, "qtyuom");

        $scope.Widgets.containerHideEqualPCUpd.show = true;
        if ($scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue.rangehide == 'Y') {
            $scope.Widgets.containerPercentageUpd.show = true;
            $scope.Widgets.containerHideEqualPCUpd.show = false;
        }
        if ($scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue.percentagehide == 'Y') {
            $scope.Widgets.containerQuantityUpdate.show = true;

        } else {
            $scope.Widgets.containerQuantityUpdate.show = false;
        }
        $scope.Variables.svRF2000PK0_OCLOVGetCurrencyLOVUpd.invoke();
    };
}]);

Application.$controller("gridFreightDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);

Application.$controller("dialogInsertFreightDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To insert a new Freight Details
        $scope.btnSaveFreightDetailsClick = function($event, $isolateScope) {
            if (!($scope.Widgets.formInsertFreightDetails.formWidgets.selectFromCountry.datavalue === null)) {
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pCtycod", $scope.Widgets.formInsertFreightDetails.formWidgets.selectFromCountry.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pShpdestctycod", $scope.Widgets.formInsertFreightDetails.formWidgets.searchToDestCountry.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pShpTyp", $scope.Widgets.formInsertFreightDetails.formWidgets.selectShipmentType.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pShpdest", $scope.Widgets.formInsertFreightDetails.formWidgets.selectShipmentDest.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pForwardern", "NA");
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.setInput("pContainerTyp", $scope.Widgets.formInsertFreightDetails.formWidgets.selectContainerType.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTInsFreightDetails.invoke();
            }
        };

        //To reset the insert  Freight Form
        $scope.btnResetFreightDetailsClick = function($event, $isolateScope) {
            $scope.Widgets.formInsertFreightDetails.formWidgets.selectFromCountry.datavalue = undefined;
            $scope.Widgets.formInsertFreightDetails.formWidgets.searchToDestCountry.datavalue = undefined;
            $scope.Widgets.formInsertFreightDetails.formWidgets.selectShipmentType.datavalue = undefined;
            $scope.Widgets.formInsertFreightDetails.formWidgets.selectShipmentDest.datavalue = undefined;
            $scope.Widgets.formInsertFreightDetails.formWidgets.selectContainerType.datavalue = undefined;
        };
    }
]);

Application.$controller("dialogUpdateFreightDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);

Application.$controller("gridCostDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To open Insert Costing Details
        $scope.addNewRowAction = function($event) {
            $scope.Widgets.dialogInsertCostDetails.open();
            $scope.Variables.svRF2000PK0_OCLOVGetCalcMethodLOV.invoke();
            $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOV.invoke();
            $scope.Variables.svRF2000PK0_OCLOVGetAllShpDestLOV.invoke();
        };

        //To open Update Costing 
        $scope.updaterowAction = function($event, $rowData) {
            $scope.Widgets.dialogUpdateCostDetails.open();
            $scope.Variables.svRF2000PK0_OCLOVGetCalcMethodLOVUpd.invoke();
            $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOVUpd.dataBinding.pCalcMethod = undefined;
            $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOVUpd.invoke();
            $scope.Variables.svRF2000PK0_OCLOVGetCalcTotalLOV.invoke();
        };
    }
]);

Application.$controller("dialogInsertCostDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To insert a new Freight and Cost Details 
        $scope.btnSaveCostDetailsClick = function($event, $isolateScope) {
            var m_FromCountryCost = $scope.Widgets.formInsertCostDetails.formWidgets.pCtycod.datavalue;
            var m_ToCountryCost = $scope.Widgets.formInsertCostDetails.formWidgets.pShpdestctycod.datavalue;
            var m_ShpdestCost = $scope.Widgets.formInsertCostDetails.formWidgets.pShpdest.datavalue;
            var m_ShpTypeCost = $scope.Widgets.formInsertCostDetails.formWidgets.pShpTyp.datavalue;
            var m_ContainerTypeCost = $scope.Widgets.formInsertCostDetails.formWidgets.pContainerTpy.datavalue;
            var m_ItemCat = $scope.Widgets.formInsertCostDetails.formWidgets.pItemcat.datavalue;
            var m_ItemDes = $scope.Widgets.formInsertCostDetails.formWidgets.pItemdes.datavalue;
            var m_qtyoum = $scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue;
            var m_calcMethod = $scope.Widgets.formInsertCostDetails.formWidgets.pCalcMethod.datavalue;

            if ((m_FromCountryCost === null || m_FromCountryCost === undefined || m_FromCountryCost === "") ||
                (m_ToCountryCost === null || m_ToCountryCost === undefined || m_ToCountryCost === "") ||
                (m_ShpdestCost === null || m_ShpdestCost === undefined || m_ShpdestCost === "") ||
                (m_ShpTypeCost === null || m_ShpTypeCost === undefined || m_ShpTypeCost === "") ||
                (m_ContainerTypeCost === null || m_ContainerTypeCost === undefined || m_ContainerTypeCost === "") ||
                (m_ItemCat === null || m_ItemCat === undefined || m_ItemCat === "") ||
                (m_ItemDes === null || m_ItemDes === undefined || m_ItemDes === "")) {
                $scope.Variables.notifMsg.operation = "alert";
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Please make entries in all fields");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCtycod", $scope.Widgets.formInsertCostDetails.formWidgets.pCtycod.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pShpdestctycod", $scope.Widgets.formInsertCostDetails.formWidgets.pShpdestctycod.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pShpdest", $scope.Widgets.formInsertCostDetails.formWidgets.pShpdest.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pShpTyp", $scope.Widgets.formInsertCostDetails.formWidgets.pShpTyp.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pForwardern", "%");
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pContainerTpy", $scope.Widgets.formInsertCostDetails.formWidgets.pContainerTpy.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pItemcat", $scope.Widgets.formInsertCostDetails.formWidgets.pItemcat.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pItemdes", $scope.Widgets.formInsertCostDetails.formWidgets.pItemdes.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCalcMethod", ((m_calcMethod === null || m_calcMethod === "" || m_calcMethod === undefined) ? m_calcMethod : $scope.Widgets.formInsertCostDetails.formWidgets.pCalcMethod.datavalue.calcmethod));
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pQtyUOM", ((m_qtyoum === null || m_qtyoum === "" || m_qtyoum === undefined) ? m_qtyoum : $scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue.qtyuom));
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCurrencyCod", $scope.Widgets.formInsertCostDetails.formWidgets.pCurrencyCod.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCurPerUnit", $scope.Widgets.formInsertCostDetails.formWidgets.pCurPerUnit.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCurperitem", $scope.Widgets.formInsertCostDetails.formWidgets.pCurperitem.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pQtyFrom", $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pQtyTo", $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCalcPercent", $scope.Widgets.formInsertCostDetails.formWidgets.pCalcPercent.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pCalcSubTotalTyp", $scope.Widgets.formInsertCostDetails.formWidgets.pCalcSubTotalTyp.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pSubtotalTyp", $scope.Widgets.formInsertCostDetails.formWidgets.pSubtotalTyp.datavalue);
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.setInput("pFreightSts", "");
            $scope.Variables.svOC1000PK0_FREIGHTInsCostDetails.invoke();
        };

        //To show percentage when itemdes3(rangehide) =  'Y' // To hide Percentage itemdes2(percentagegide) = 'Y' and Qty From and To, to have default value (0-9999) when not itemdes2(percentagehide) != 'Y'
        $scope.pQtyUOMChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.containerHideEqualPC.show = true;
            if ($scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue.rangehide == 'Y') {
                $scope.Widgets.containerPercentage.show = true;
                $scope.Widgets.containerHideEqualPC.show = false;
                $scope.Widgets.formInsertCostDetails.formWidgets.pCurPerUnit.datavalue = 0;
            }
            if ($scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue.percentagehide == 'Y') {
                $scope.Widgets.containerQuantityRange.show = true;
                $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = 0;
                $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = 0;
            } else {
                $scope.Widgets.containerQuantityRange.show = false;
                $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = 0;
                $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = 99999;
            }
        };

        //To reset insert Freight and Cost Form
        $scope.btnResetCostDetailsClick = function($event, $isolateScope) {
            $scope.Widgets.formInsertCostDetails.formWidgets.pCtycod.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pShpdestctycod.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pShpdest.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pShpTyp.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pContainerTpy.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pItemcat.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pItemdes.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCalcMethod.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue = undefined;
            $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOV.dataSet = null;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCurrencyCod.datavalue = undefined;
            $scope.Variables.svRF2000PK0_OCLOVGetCurrencyLOV.dataSet = null;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCurPerUnit.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCurperitem.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = null;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = null;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCalcPercent.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCalcSubTotalTyp.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pSubtotalTyp.datavalue = undefined;
            $scope.Widgets.formInsertCostDetails.formWidgets.pFreightSts.datavalue = null;

            $scope.Widgets.containerQuantityRange.show = false;
            $scope.Widgets.containerPercentage.show = false;
            $scope.Widgets.containerHideEqualPC.show = false;
        };

        //To hide percentage or quantity whene calc method is changing value
        $scope.pCalcMethodChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.containerHideEqualPC.show = false;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCurPerUnit.datavalue = 0;
            $scope.Widgets.containerQuantityRange.show = false;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyFrom.datavalue = 0;
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyTo.datavalue = 0;
            $scope.Widgets.containerPercentage.show = false;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCalcPercent.datavalue = 0;
            $scope.Widgets.formInsertCostDetails.formWidgets.pCalcSubTotalTyp.datavalue = undefined;
            //$scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOV.invoke();
            $scope.Widgets.formInsertCostDetails.formWidgets.pQtyUOM.datavalue = undefined;
        };
    }
]);

Application.$controller("dialogUpdateCostDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //To update a Freight and Cost Details 
        $scope.btnUpdateCostClick = function($event, $isolateScope) {
            var m_qtyoumupd = $scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue;
            var m_calcMethodUpd = $scope.Widgets.formUpdateCost.formWidgets.pCalcmethod.datavalue;
            if (!($scope.Widgets.formUpdateCost.formWidgets.pCtycod.datavalue === null || m_qtyoumupd === null || m_qtyoumupd === undefined || m_qtyoumupd === "")) {
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCtycod", $scope.Widgets.formUpdateCost.formWidgets.pCtycod.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pShptyp", $scope.Widgets.formUpdateCost.formWidgets.pShptyp.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pFreightseqnr", $scope.Widgets.formUpdateCost.formWidgets.pFreightseqnr.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pShpdestctycod", $scope.Widgets.formUpdateCost.formWidgets.pShpdestctycod.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pItemdes", $scope.Widgets.formUpdateCost.formWidgets.pItemdes.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCalcmethod", ((m_calcMethodUpd === null || m_calcMethodUpd === "" || m_calcMethodUpd === undefined) ? m_calcMethodUpd : $scope.Widgets.formUpdateCost.formWidgets.pCalcmethod.datavalue.calcmethod));
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pQtyUom", ((m_qtyoumupd === null || m_qtyoumupd === "" || m_qtyoumupd === undefined) ? m_qtyoumupd : $scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue.qtyuom));
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCurperunit", $scope.Widgets.formUpdateCost.formWidgets.pCurperunit.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCurperitem", $scope.Widgets.formUpdateCost.formWidgets.pCurperitem.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCurrency", $scope.Widgets.formUpdateCost.formWidgets.pCurrency.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pQtyfrom", $scope.Widgets.formUpdateCost.formWidgets.pQtyfrom.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pQtyto", $scope.Widgets.formUpdateCost.formWidgets.pQtyto.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCalcpercent", $scope.Widgets.formUpdateCost.formWidgets.pCalcpercent.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pCalctotal", $scope.Widgets.formUpdateCost.formWidgets.pCalctotal.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pSubtotal", $scope.Widgets.formUpdateCost.formWidgets.pSubtotal.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.setInput("pSortseq", $scope.Widgets.formUpdateCost.formWidgets.pSortseq.datavalue);
                $scope.Variables.svOC1000PK0_FREIGHTUpdCostDetails.invoke();
            } else {
                $scope.Variables.notifMsg.operation = "alert";
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Please make entries for Qty UOM. ");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        //To reset update Freight and Cost Form
        $scope.btnResertUpdCostClick = function($event, $isolateScope) {
            $scope.Widgets.formUpdateCost.formWidgets.pItemdes.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pCalcmethod.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue = undefined;
            $scope.Variables.svRF2000PK0_OCLOVGetQtyUomLOVUpd.dataSet = null;
            $scope.Widgets.formUpdateCost.formWidgets.pCurperunit.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pCurperitem.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pCurrency.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyfrom.datavalue = null;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyto.datavalue = null;
            $scope.Widgets.formUpdateCost.formWidgets.pCalcpercent.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pCalctotal.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pSubtotal.datavalue = undefined;

            $scope.Widgets.containerQuantityUpdate.show = false;
            $scope.Widgets.containerPercentageUpd.show = false;
            $scope.Widgets.containerHideEqualPCUpd.show = false;
        };



        //To show percentage when itemdes3(rangehide) = 'Y' // To hide Percentage when itemdes2(percentagehide) = 'Y'
        $scope.pQtyUomChange = function($event, $isolateScope, newVal, oldVal) {

            $scope.Widgets.containerHideEqualPCUpd.show = true;
            if ($scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue.rangehide == 'Y') {
                $scope.Widgets.containerPercentageUpd.show = true;
                $scope.Widgets.containerHideEqualPCUpd.show = false;
            }
            if ($scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue.percentagehide == 'Y') {
                $scope.Widgets.containerQuantityUpdate.show = true;

            } else {
                $scope.Widgets.containerQuantityUpdate.show = false;
            }
        };

        //To hide percentage or quantity whene calc method is changing value
        $scope.pCalcmethodChange = function($event, $isolateScope, newVal, oldVal) {

            $scope.Widgets.containerHideEqualPCUpd.show = false;
            $scope.Widgets.containerPercentageUpd.show = false;
            $scope.Widgets.containerQuantityUpdate.show = false;
            $scope.Widgets.formUpdateCost.formWidgets.pCurperunit.datavalue = 0;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyfrom.datavalue = 0;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyto.datavalue = 0;
            $scope.Widgets.formUpdateCost.formWidgets.pCalcpercent.datavalue = 0;
            $scope.Widgets.formUpdateCost.formWidgets.pCalctotal.datavalue = undefined;
            $scope.Widgets.formUpdateCost.formWidgets.pQtyUom.datavalue = undefined;
        };
    }
]);

Application.$controller("confirmdialogFreightDeleteController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //Confirm button to delete a row in the grid 
        $scope.confirmdialogFreightDeleteOk = function($event, $isolateScope) {
            $scope.Variables.svOC1000PK0_FREIGHTDelFreightDetails.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOC1000PK0_FREIGHTDelFreightDetails.setInput("pCtycod", $scope.Widgets.gridFreightDetails.selecteditem.ctycod);
            $scope.Variables.svOC1000PK0_FREIGHTDelFreightDetails.setInput("pShpdestctycod", $scope.Widgets.gridFreightDetails.selecteditem.shpdestctycod);
            $scope.Variables.svOC1000PK0_FREIGHTDelFreightDetails.setInput("pShpseq", $scope.Widgets.gridFreightDetails.selecteditem.shpseq);
            $scope.Variables.svOC1000PK0_FREIGHTDelFreightDetails.invoke();
        };
    }
]);

Application.$controller("confirmdialogCostDeleteController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //Confirm button to cancel a row in the grid
        $scope.confirmdialogCostDeleteOk = function($event, $isolateScope) {
            $scope.Variables.svOC1000PK0_FREIGHTCancelCostDetails.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svOC1000PK0_FREIGHTCancelCostDetails.setInput("pCtycod", $scope.Widgets.gridCostDetails.selecteditem.ctycod);
            $scope.Variables.svOC1000PK0_FREIGHTCancelCostDetails.setInput("pShptyp", $scope.Widgets.gridCostDetails.selecteditem.shptyp);
            $scope.Variables.svOC1000PK0_FREIGHTCancelCostDetails.setInput("pFreightseqnr", $scope.Widgets.gridCostDetails.selecteditem.freightseqnr);
            $scope.Variables.svOC1000PK0_FREIGHTCancelCostDetails.invoke();
        };
    }
]);

Application.$controller("gridLOVController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridFreigthTermController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);