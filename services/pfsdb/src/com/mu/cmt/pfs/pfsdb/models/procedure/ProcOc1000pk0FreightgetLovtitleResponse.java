/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOc1000pk0FreightgetLovtitleResponse implements Serializable {


    @ColumnAlias("pOutLOVTitle")
    private List<ProcOc1000pk0FreightgetLovtitleResponsePoutLovtitle> poutLovtitle;

    public List<ProcOc1000pk0FreightgetLovtitleResponsePoutLovtitle> getPoutLovtitle() {
        return this.poutLovtitle;
    }

    public void setPoutLovtitle(List<ProcOc1000pk0FreightgetLovtitleResponsePoutLovtitle> poutLovtitle) {
        this.poutLovtitle = poutLovtitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOc1000pk0FreightgetLovtitleResponse)) return false;
        final ProcOc1000pk0FreightgetLovtitleResponse procOc1000pk0freightgetLovtitleResponse = (ProcOc1000pk0FreightgetLovtitleResponse) o;
        return Objects.equals(getPoutLovtitle(), procOc1000pk0freightgetLovtitleResponse.getPoutLovtitle());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutLovtitle());
    }
}