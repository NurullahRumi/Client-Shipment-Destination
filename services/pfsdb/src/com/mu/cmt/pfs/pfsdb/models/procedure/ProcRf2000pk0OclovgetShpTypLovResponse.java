/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetShpTypLovResponse implements Serializable {


    @ColumnAlias("pOutShptypLOV")
    private List<ProcRf2000pk0OclovgetShpTypLovResponsePoutShptypLov> poutShptypLov;

    public List<ProcRf2000pk0OclovgetShpTypLovResponsePoutShptypLov> getPoutShptypLov() {
        return this.poutShptypLov;
    }

    public void setPoutShptypLov(List<ProcRf2000pk0OclovgetShpTypLovResponsePoutShptypLov> poutShptypLov) {
        this.poutShptypLov = poutShptypLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetShpTypLovResponse)) return false;
        final ProcRf2000pk0OclovgetShpTypLovResponse procRf2000pk0oclovgetShpTypLovResponse = (ProcRf2000pk0OclovgetShpTypLovResponse) o;
        return Objects.equals(getPoutShptypLov(), procRf2000pk0oclovgetShpTypLovResponse.getPoutShptypLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutShptypLov());
    }
}