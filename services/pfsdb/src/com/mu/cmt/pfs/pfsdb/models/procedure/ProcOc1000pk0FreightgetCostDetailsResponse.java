/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOc1000pk0FreightgetCostDetailsResponse implements Serializable {


    @ColumnAlias("pOutCostDetails")
    private List<ProcOc1000pk0FreightgetCostDetailsResponsePoutCostDetails> poutCostDetails;

    public List<ProcOc1000pk0FreightgetCostDetailsResponsePoutCostDetails> getPoutCostDetails() {
        return this.poutCostDetails;
    }

    public void setPoutCostDetails(List<ProcOc1000pk0FreightgetCostDetailsResponsePoutCostDetails> poutCostDetails) {
        this.poutCostDetails = poutCostDetails;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOc1000pk0FreightgetCostDetailsResponse)) return false;
        final ProcOc1000pk0FreightgetCostDetailsResponse procOc1000pk0freightgetCostDetailsResponse = (ProcOc1000pk0FreightgetCostDetailsResponse) o;
        return Objects.equals(getPoutCostDetails(), procOc1000pk0freightgetCostDetailsResponse.getPoutCostDetails());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutCostDetails());
    }
}