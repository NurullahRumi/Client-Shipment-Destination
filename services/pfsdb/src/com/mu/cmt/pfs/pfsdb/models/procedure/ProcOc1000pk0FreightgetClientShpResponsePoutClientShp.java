/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOc1000pk0FreightgetClientShpResponsePoutClientShp implements Serializable {


    @ColumnAlias("CLIGRP")
    private String cligrp;

    @ColumnAlias("CLICOD")
    private String clicod;

    @ColumnAlias("SEQNR")
    private Short seqnr;

    @ColumnAlias("FREIGHT_TERM")
    private String freightTerm;

    @ColumnAlias("SRCCTYCOD")
    private String srcctycod;

    @ColumnAlias("SHPDEST")
    private String shpdest;

    @ColumnAlias("SHPDESTCTYCOD")
    private String shpdestctycod;

    @ColumnAlias("MODID")
    private String modid;

    @ColumnAlias("MODDAT")
    private LocalDateTime moddat;

    public String getCligrp() {
        return this.cligrp;
    }

    public void setCligrp(String cligrp) {
        this.cligrp = cligrp;
    }

    public String getClicod() {
        return this.clicod;
    }

    public void setClicod(String clicod) {
        this.clicod = clicod;
    }

    public Short getSeqnr() {
        return this.seqnr;
    }

    public void setSeqnr(Short seqnr) {
        this.seqnr = seqnr;
    }

    public String getFreightTerm() {
        return this.freightTerm;
    }

    public void setFreightTerm(String freightTerm) {
        this.freightTerm = freightTerm;
    }

    public String getSrcctycod() {
        return this.srcctycod;
    }

    public void setSrcctycod(String srcctycod) {
        this.srcctycod = srcctycod;
    }

    public String getShpdest() {
        return this.shpdest;
    }

    public void setShpdest(String shpdest) {
        this.shpdest = shpdest;
    }

    public String getShpdestctycod() {
        return this.shpdestctycod;
    }

    public void setShpdestctycod(String shpdestctycod) {
        this.shpdestctycod = shpdestctycod;
    }

    public String getModid() {
        return this.modid;
    }

    public void setModid(String modid) {
        this.modid = modid;
    }

    public LocalDateTime getModdat() {
        return this.moddat;
    }

    public void setModdat(LocalDateTime moddat) {
        this.moddat = moddat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOc1000pk0FreightgetClientShpResponsePoutClientShp)) return false;
        final ProcOc1000pk0FreightgetClientShpResponsePoutClientShp procOc1000pk0freightgetClientShpResponsePoutClientShp = (ProcOc1000pk0FreightgetClientShpResponsePoutClientShp) o;
        return Objects.equals(getCligrp(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getCligrp()) &&
                Objects.equals(getClicod(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getClicod()) &&
                Objects.equals(getSeqnr(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getSeqnr()) &&
                Objects.equals(getFreightTerm(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getFreightTerm()) &&
                Objects.equals(getSrcctycod(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getSrcctycod()) &&
                Objects.equals(getShpdest(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getShpdest()) &&
                Objects.equals(getShpdestctycod(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getShpdestctycod()) &&
                Objects.equals(getModid(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getModid()) &&
                Objects.equals(getModdat(), procOc1000pk0freightgetClientShpResponsePoutClientShp.getModdat());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCligrp(),
                getClicod(),
                getSeqnr(),
                getFreightTerm(),
                getSrcctycod(),
                getShpdest(),
                getShpdestctycod(),
                getModid(),
                getModdat());
    }
}