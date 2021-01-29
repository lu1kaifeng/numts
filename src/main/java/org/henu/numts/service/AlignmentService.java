package org.henu.numts.service;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.biojava.nbio.alignment.Alignments;
import org.biojava.nbio.alignment.SimpleGapPenalty;
import org.biojava.nbio.core.alignment.matrices.SubstitutionMatrixHelper;
import org.biojava.nbio.core.alignment.template.AlignedSequence;
import org.biojava.nbio.core.alignment.template.SequencePair;
import org.biojava.nbio.core.alignment.template.SubstitutionMatrix;
import org.biojava.nbio.core.exceptions.CompoundNotFoundException;
import org.biojava.nbio.core.sequence.DNASequence;
import org.biojava.nbio.core.sequence.compound.AmbiguityDNACompoundSet;
import org.biojava.nbio.core.sequence.compound.NucleotideCompound;
import org.henu.numts.entity.AlignmentEntry;
import org.henu.numts.entity.AlignmentRequest;
import org.henu.numts.entity.Gene;
import org.henu.numts.repository.GeneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class AlignmentService {
    @Autowired
    private GeneRepository geneRepository;
    @Deprecated
    public List<AlignmentEntry> Align(AlignmentRequest alignmentRequest) throws CompoundNotFoundException {
        List<Gene> geneList = geneRepository.findAll();
        List<AlignmentEntry> alignmentEntryLinkedList = new ArrayList<>();
        for(Gene g : geneList){
            if(g.getSub().equals("")){
                continue;
            }
            DNASequence target = new DNASequence(alignmentRequest.getSequence(),
                    AmbiguityDNACompoundSet.getDNACompoundSet());


            DNASequence query = new DNASequence(g.getSub(),
                    AmbiguityDNACompoundSet.getDNACompoundSet());
            SubstitutionMatrix<NucleotideCompound> matrix = SubstitutionMatrixHelper.getNuc4_4();

            SimpleGapPenalty gapP = new SimpleGapPenalty();
            gapP.setOpenPenalty((short)5);
            gapP.setExtensionPenalty((short)2);

            SequencePair<DNASequence, NucleotideCompound> psa =
                    Alignments.getPairwiseAlignment(query, target,
                            Alignments.PairwiseSequenceAlignerType.LOCAL, gapP, matrix);
            AlignmentEntry alignmentEntry = new AlignmentEntry();
            alignmentEntry.setNumts_ID(g.getNumts_ID());
            alignmentEntry.setAlignedSequenceList(psa.getAlignedSequences());
            alignmentEntry.setPercentageOfIdentity(psa.getPercentageOfIdentity(false));
           if(psa.getPercentageOfIdentity(false) > 0.8d) alignmentEntryLinkedList.add(alignmentEntry);
        }
        return alignmentEntryLinkedList;
    }

    public synchronized List<AlignmentEntry> SparkAlign(AlignmentRequest alignmentRequest){
        SparkConf conf = new SparkConf().setMaster("spark://10.0.0.234:7078").setAppName("NUMTS_ALIGNMENT");
        JavaSparkContext sc = new JavaSparkContext(conf);
        JavaRDD<Gene> entries = sc.parallelize(geneRepository.findAll());
        entries = entries.filter((Gene e)-> !e.getSub().equals(""));
        JavaRDD<AlignmentEntry> alignmentEntries = entries.map((Gene e)->{
            DNASequence target = new DNASequence(alignmentRequest.getSequence(),
                    AmbiguityDNACompoundSet.getDNACompoundSet());
            DNASequence query = new DNASequence(e.getSub(),
                    AmbiguityDNACompoundSet.getDNACompoundSet());
            SubstitutionMatrix<NucleotideCompound> matrix = SubstitutionMatrixHelper.getNuc4_4();

            SimpleGapPenalty gapP = new SimpleGapPenalty();
            gapP.setOpenPenalty((short)5);
            gapP.setExtensionPenalty((short)2);

            SequencePair<DNASequence, NucleotideCompound> psa =
                    Alignments.getPairwiseAlignment(query, target,
                            Alignments.PairwiseSequenceAlignerType.LOCAL, gapP, matrix);
            AlignmentEntry alignmentEntry = new AlignmentEntry();
            alignmentEntry.setNumts_ID(e.getNumts_ID());
            alignmentEntry.setAlignedSequenceList(psa.getAlignedSequences());
            alignmentEntry.setPercentageOfIdentity(psa.getPercentageOfIdentity(false));
          return alignmentEntry;
        });
        alignmentEntries = alignmentEntries.filter((AlignmentEntry alignmentEntry)-> alignmentEntry.getPercentageOfIdentity() > 0.8d);
        List<AlignmentEntry> alignmentEntryList = alignmentEntries.collect();
        sc.close();
        return alignmentEntryList;
    }
}
