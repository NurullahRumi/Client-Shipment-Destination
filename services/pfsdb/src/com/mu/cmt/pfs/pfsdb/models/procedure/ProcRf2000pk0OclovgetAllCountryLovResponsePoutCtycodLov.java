/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetAllCountryLovResponsePoutCtycodLov implements Serializable {


    @ColumnAlias("CTYCOD")
    private String ctycod;

    public String getCtycod() {
        return this.ctycod;
    }

    public void setCtycod(String ctycod) {
        this.ctycod = ctycod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetAllCountryLovResponsePoutCtycodLov)) return false;
        final ProcRf2000pk0OclovgetAllCountryLovResponsePoutCtycodLov procRf2000pk0oclovgetAllCountryLovResponsePoutCtycodLov = (ProcRf2000pk0OclovgetAllCountryLovResponsePoutCtycodLov) o;
        return Objects.equals(getCtycod(), procRf2000pk0oclovgetAllCountryLovResponsePoutCtycodLov.getCtycod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCtycod());
    }
}