/*Copyright (c) 2018-2019 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.wavemaker.runtime.data.dao.WMGenericDao;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.model.Downloadable;

import com.mu.cmt.pfs.pfsdb.VRft90201;
import com.mu.cmt.pfs.pfsdb.VRft90201Id;


/**
 * ServiceImpl object for domain model class VRft90201.
 *
 * @see VRft90201
 */
@Service("pfsdb.VRft90201Service")
@Validated
public class VRft90201ServiceImpl implements VRft90201Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(VRft90201ServiceImpl.class);


    @Autowired
    @Qualifier("pfsdb.VRft90201Dao")
    private WMGenericDao<VRft90201, VRft90201Id> wmGenericDao;

    public void setWMGenericDao(WMGenericDao<VRft90201, VRft90201Id> wmGenericDao) {
        this.wmGenericDao = wmGenericDao;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public VRft90201 create(VRft90201 vrft90201) {
        LOGGER.debug("Creating a new VRft90201 with information: {}", vrft90201);

        VRft90201 vrft90201Created = this.wmGenericDao.create(vrft90201);
        // reloading object from database to get database defined & server defined values.
        return this.wmGenericDao.refresh(vrft90201Created);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public VRft90201 getById(VRft90201Id vrft90201Id) {
        LOGGER.debug("Finding VRft90201 by id: {}", vrft90201Id);
        return this.wmGenericDao.findById(vrft90201Id);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public VRft90201 findById(VRft90201Id vrft90201Id) {
        LOGGER.debug("Finding VRft90201 by id: {}", vrft90201Id);
        try {
            return this.wmGenericDao.findById(vrft90201Id);
        } catch (EntityNotFoundException ex) {
            LOGGER.debug("No VRft90201 found with id: {}", vrft90201Id, ex);
            return null;
        }
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public List<VRft90201> findByMultipleIds(List<VRft90201Id> vrft90201Ids, boolean orderedReturn) {
        LOGGER.debug("Finding VRft90201s by ids: {}", vrft90201Ids);

        return this.wmGenericDao.findByMultipleIds(vrft90201Ids, orderedReturn);
    }


    @Transactional(rollbackFor = EntityNotFoundException.class, value = "pfsdbTransactionManager")
    @Override
    public VRft90201 update(VRft90201 vrft90201) {
        LOGGER.debug("Updating VRft90201 with information: {}", vrft90201);

        this.wmGenericDao.update(vrft90201);
        this.wmGenericDao.refresh(vrft90201);

        return vrft90201;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public VRft90201 delete(VRft90201Id vrft90201Id) {
        LOGGER.debug("Deleting VRft90201 with id: {}", vrft90201Id);
        VRft90201 deleted = this.wmGenericDao.findById(vrft90201Id);
        if (deleted == null) {
            LOGGER.debug("No VRft90201 found with id: {}", vrft90201Id);
            throw new EntityNotFoundException(String.valueOf(vrft90201Id));
        }
        this.wmGenericDao.delete(deleted);
        return deleted;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public void delete(VRft90201 vrft90201) {
        LOGGER.debug("Deleting VRft90201 with {}", vrft90201);
        this.wmGenericDao.delete(vrft90201);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<VRft90201> findAll(QueryFilter[] queryFilters, Pageable pageable) {
        LOGGER.debug("Finding all VRft90201s");
        return this.wmGenericDao.search(queryFilters, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<VRft90201> findAll(String query, Pageable pageable) {
        LOGGER.debug("Finding all VRft90201s");
        return this.wmGenericDao.searchByQuery(query, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager", timeout = 300)
    @Override
    public Downloadable export(ExportType exportType, String query, Pageable pageable) {
        LOGGER.debug("exporting data in the service pfsdb for table VRft90201 to {} format", exportType);
        return this.wmGenericDao.export(exportType, query, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager", timeout = 300)
    @Override
    public void export(DataExportOptions options, Pageable pageable, OutputStream outputStream) {
        LOGGER.debug("exporting data in the service pfsdb for table VRft90201 to {} format", options.getExportType());
        this.wmGenericDao.export(options, pageable, outputStream);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public long count(String query) {
        return this.wmGenericDao.count(query);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<Map<String, Object>> getAggregatedValues(AggregationInfo aggregationInfo, Pageable pageable) {
        return this.wmGenericDao.getAggregatedValues(aggregationInfo, pageable);
    }



}