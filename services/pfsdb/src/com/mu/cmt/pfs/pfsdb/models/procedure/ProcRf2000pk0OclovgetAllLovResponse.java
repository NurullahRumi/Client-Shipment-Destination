/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetAllLovResponse implements Serializable {


    @ColumnAlias("pOutAllLOV")
    private List<ProcRf2000pk0OclovgetAllLovResponsePoutAllLov> poutAllLov;

    public List<ProcRf2000pk0OclovgetAllLovResponsePoutAllLov> getPoutAllLov() {
        return this.poutAllLov;
    }

    public void setPoutAllLov(List<ProcRf2000pk0OclovgetAllLovResponsePoutAllLov> poutAllLov) {
        this.poutAllLov = poutAllLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetAllLovResponse)) return false;
        final ProcRf2000pk0OclovgetAllLovResponse procRf2000pk0oclovgetAllLovResponse = (ProcRf2000pk0OclovgetAllLovResponse) o;
        return Objects.equals(getPoutAllLov(), procRf2000pk0oclovgetAllLovResponse.getPoutAllLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutAllLov());
    }
}