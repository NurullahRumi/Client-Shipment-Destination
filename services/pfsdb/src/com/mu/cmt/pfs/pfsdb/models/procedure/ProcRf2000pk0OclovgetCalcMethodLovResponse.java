/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetCalcMethodLovResponse implements Serializable {


    @ColumnAlias("p_Out_CalcMethodLOV")
    private List<ProcRf2000pk0OclovgetCalcMethodLovResponsePoutCalcMethodLov> poutCalcMethodLov;

    public List<ProcRf2000pk0OclovgetCalcMethodLovResponsePoutCalcMethodLov> getPoutCalcMethodLov() {
        return this.poutCalcMethodLov;
    }

    public void setPoutCalcMethodLov(List<ProcRf2000pk0OclovgetCalcMethodLovResponsePoutCalcMethodLov> poutCalcMethodLov) {
        this.poutCalcMethodLov = poutCalcMethodLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetCalcMethodLovResponse)) return false;
        final ProcRf2000pk0OclovgetCalcMethodLovResponse procRf2000pk0oclovgetCalcMethodLovResponse = (ProcRf2000pk0OclovgetCalcMethodLovResponse) o;
        return Objects.equals(getPoutCalcMethodLov(), procRf2000pk0oclovgetCalcMethodLovResponse.getPoutCalcMethodLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutCalcMethodLov());
    }
}