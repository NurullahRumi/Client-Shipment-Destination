/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetShpContLovResponse implements Serializable {


    @ColumnAlias("pOutShpContLOV")
    private List<ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov> poutShpContLov;

    public List<ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov> getPoutShpContLov() {
        return this.poutShpContLov;
    }

    public void setPoutShpContLov(List<ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov> poutShpContLov) {
        this.poutShpContLov = poutShpContLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetShpContLovResponse)) return false;
        final ProcRf2000pk0OclovgetShpContLovResponse procRf2000pk0oclovgetShpContLovResponse = (ProcRf2000pk0OclovgetShpContLovResponse) o;
        return Objects.equals(getPoutShpContLov(), procRf2000pk0oclovgetShpContLovResponse.getPoutShpContLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutShpContLov());
    }
}