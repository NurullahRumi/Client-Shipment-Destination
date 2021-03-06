/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetShpTypCostLovResponsePoutShptypcostLov implements Serializable {


    @ColumnAlias("SHPTYPCOST")
    private String shptypcost;

    public String getShptypcost() {
        return this.shptypcost;
    }

    public void setShptypcost(String shptypcost) {
        this.shptypcost = shptypcost;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetShpTypCostLovResponsePoutShptypcostLov)) return false;
        final ProcRf2000pk0OclovgetShpTypCostLovResponsePoutShptypcostLov procRf2000pk0oclovgetShpTypCostLovResponsePoutShptypcostLov = (ProcRf2000pk0OclovgetShpTypCostLovResponsePoutShptypcostLov) o;
        return Objects.equals(getShptypcost(), procRf2000pk0oclovgetShpTypCostLovResponsePoutShptypcostLov.getShptypcost());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getShptypcost());
    }
}