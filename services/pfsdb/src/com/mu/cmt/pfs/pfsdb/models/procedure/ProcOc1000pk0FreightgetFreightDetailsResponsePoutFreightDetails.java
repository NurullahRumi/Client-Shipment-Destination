/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcOc1000pk0FreightgetFreightDetailsResponsePoutFreightDetails implements Serializable {


    @ColumnAlias("CTYCOD")
    private String ctycod;

    @ColumnAlias("SHPDESTCTYCOD")
    private String shpdestctycod;

    @ColumnAlias("SHPSEQ")
    private Short shpseq;

    @ColumnAlias("SHPTYP")
    private String shptyp;

    @ColumnAlias("SHPDEST")
    private String shpdest;

    @ColumnAlias("FORWARDERN")
    private String forwardern;

    @ColumnAlias("CONTAINER_TYPE")
    private String containerType;

    public String getCtycod() {
        return this.ctycod;
    }

    public void setCtycod(String ctycod) {
        this.ctycod = ctycod;
    }

    public String getShpdestctycod() {
        return this.shpdestctycod;
    }

    public void setShpdestctycod(String shpdestctycod) {
        this.shpdestctycod = shpdestctycod;
    }

    public Short getShpseq() {
        return this.shpseq;
    }

    public void setShpseq(Short shpseq) {
        this.shpseq = shpseq;
    }

    public String getShptyp() {
        return this.shptyp;
    }

    public void setShptyp(String shptyp) {
        this.shptyp = shptyp;
    }

    public String getShpdest() {
        return this.shpdest;
    }

    public void setShpdest(String shpdest) {
        this.shpdest = shpdest;
    }

    public String getForwardern() {
        return this.forwardern;
    }

    public void setForwardern(String forwardern) {
        this.forwardern = forwardern;
    }

    public String getContainerType() {
        return this.containerType;
    }

    public void setContainerType(String containerType) {
        this.containerType = containerType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcOc1000pk0FreightgetFreightDetailsResponsePoutFreightDetails)) return false;
        final ProcOc1000pk0FreightgetFreightDetailsResponsePoutFreightDetails procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails = (ProcOc1000pk0FreightgetFreightDetailsResponsePoutFreightDetails) o;
        return Objects.equals(getCtycod(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getCtycod()) &&
                Objects.equals(getShpdestctycod(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getShpdestctycod()) &&
                Objects.equals(getShpseq(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getShpseq()) &&
                Objects.equals(getShptyp(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getShptyp()) &&
                Objects.equals(getShpdest(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getShpdest()) &&
                Objects.equals(getForwardern(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getForwardern()) &&
                Objects.equals(getContainerType(), procOc1000pk0freightgetFreightDetailsResponsePoutFreightDetails.getContainerType());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCtycod(),
                getShpdestctycod(),
                getShpseq(),
                getShptyp(),
                getShpdest(),
                getForwardern(),
                getContainerType());
    }
}