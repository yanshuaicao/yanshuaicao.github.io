---
layout: page
title: Semantic Parsing & Code Generation
description: Research on improving semantic parsing and code generation through neural approaches
img: assets/img/semantic_parsing.webp
importance: 2
category: research
---

This project focuses on advancing semantic parsing and code generation through novel neural architectures, training techniques, and data synthesis approaches.

---

## Natural Language to Code/SQL

### Code Generation with Monolingual Data
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/codegen_mono.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We demonstrated that leveraging large amounts of monolingual programming language data can significantly improve code generation, achieving state-of-the-art performance with minimal task-specific architecture design.

[Publication Details](/publications/#norouzi-etal-2021-code){:target="_blank"}

### TURING: Cross-Domain Natural Language Database Interface

We developed TURING, an interpretable multi-hypothesis system for Text-to-SQL parsing that achieves 75.1% execution accuracy on Spider. The system provides natural language explanations of SQL queries to help users select the correct interpretation.

[Publication Details](/publications/#xu-etal-2021-turing){:target="_blank"}

---

## Training & Architecture Innovations

### Optimizing Deeper Transformers on Small Datasets
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dt_fixup.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We introduced DT-Fixup, an initialization and learning rate scheme that enables training deep transformers on small datasets without warmup or layer normalization, leading to both better performance and faster training.

[Publication Details](/publications/#xu-etal-2021-optimizing){:target="_blank"}

### Globally Normalized Neural Model
A novel approach to semantic parsing that uses global normalization instead of local decisions, helping to avoid the label bias problem and improve parsing accuracy on small datasets.

[Publication Details](/publications/#huang-etal-2021-globally){:target="_blank"}

---

## Data Generation & Synthesis

### Hierarchical Neural Data Synthesis
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/hier_syn_sempar.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We developed a purely neural approach for synthesizing semantic parsing training data that removes the need for grammar engineering while achieving higher accuracy. The method enables zero-shot synthesis using only schema information.

[Publication Details](/publications/#yang2021hierarchicalneuraldatasynthesis){:target="_blank"}

---

## Impact

This research has advanced semantic parsing and code generation by:
- Developing more efficient training methods for deep transformers
- Creating techniques for leveraging unlabeled data effectively
- Building interpretable multi-hypothesis parsing systems
- Enabling zero-shot data synthesis for new domains
- Improving model architectures through global normalization

The methods have been successfully applied to various tasks including code generation, Text-to-SQL parsing, and semantic parsing across different domains, making these technologies more practical and accessible. 