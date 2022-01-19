/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov implements Serializable {


    @ColumnAlias("SHPCONTCOD")
    private String shpcontcod;

    public String getShpcontcod() {
        return this.shpcontcod;
    }

    public void setShpcontcod(String shpcontcod) {
        this.shpcontcod = shpcontcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov)) return false;
        final ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov procRf2000pk0oclovgetShpContLovResponsePoutShpContLov = (ProcRf2000pk0OclovgetShpContLovResponsePoutShpContLov) o;
        return Objects.equals(getShpcontcod(), procRf2000pk0oclovgetShpContLovResponsePoutShpContLov.getShpcontcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getShpcontcod());
    }
}