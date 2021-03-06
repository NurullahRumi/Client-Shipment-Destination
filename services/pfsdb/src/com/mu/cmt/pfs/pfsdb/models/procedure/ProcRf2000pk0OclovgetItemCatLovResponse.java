/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetItemCatLovResponse implements Serializable {


    @ColumnAlias("pOutItemCatLOV")
    private List<ProcRf2000pk0OclovgetItemCatLovResponsePoutItemCatLov> poutItemCatLov;

    public List<ProcRf2000pk0OclovgetItemCatLovResponsePoutItemCatLov> getPoutItemCatLov() {
        return this.poutItemCatLov;
    }

    public void setPoutItemCatLov(List<ProcRf2000pk0OclovgetItemCatLovResponsePoutItemCatLov> poutItemCatLov) {
        this.poutItemCatLov = poutItemCatLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetItemCatLovResponse)) return false;
        final ProcRf2000pk0OclovgetItemCatLovResponse procRf2000pk0oclovgetItemCatLovResponse = (ProcRf2000pk0OclovgetItemCatLovResponse) o;
        return Objects.equals(getPoutItemCatLov(), procRf2000pk0oclovgetItemCatLovResponse.getPoutItemCatLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutItemCatLov());
    }
}