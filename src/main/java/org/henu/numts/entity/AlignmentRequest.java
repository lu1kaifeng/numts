package org.henu.numts.entity;

import java.io.Serializable;

public class AlignmentRequest implements Serializable {
    private String sequence;

    public String getSequence() {
        return sequence;
    }

    public void setSequence(String sequence) {
        this.sequence = sequence;
    }
}
