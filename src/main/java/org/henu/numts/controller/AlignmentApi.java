package org.henu.numts.controller;

import org.biojava.nbio.core.exceptions.CompoundNotFoundException;
import org.henu.numts.entity.AlignmentEntry;
import org.henu.numts.entity.AlignmentRequest;
import org.henu.numts.service.AlignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.util.List;

@Controller
public class AlignmentApi {
    @Autowired
    private AlignmentService alignmentService;
    @RequestMapping(value = "/Align",
            produces = { "application/json" },
            method = RequestMethod.POST)
    public ResponseEntity<List<AlignmentEntry>> BLCACombined(@RequestBody AlignmentRequest alignmentRequest) throws CompoundNotFoundException {
        return new ResponseEntity<>(alignmentService.SparkAlign(alignmentRequest),HttpStatus.OK);
    }
}
