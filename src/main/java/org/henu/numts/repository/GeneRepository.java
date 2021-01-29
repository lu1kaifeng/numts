package org.henu.numts.repository;

import org.henu.numts.entity.Gene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneRepository extends JpaRepository<Gene,Long> {

}
