---
layout: page
title: Gaussian Process Research
description: A series of works on scaling and improving Gaussian Process models
img: assets/img/cholqr.png
importance: 4
category: research
---

This project encompasses a series of works focused on making Gaussian Process models more scalable and practical for real-world applications.

### Key Publications
Improving GAN Training via Binarized Representation Entropy (BRE) Regularization

#### Scaling Gaussian Processes (PhD Thesis)
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cholqr.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My PhD thesis at University of Toronto focused on developing methods to scale Gaussian Process models to large datasets. The work combines theoretical insights with practical algorithms for making GPs more computationally efficient while maintaining their powerful probabilistic modeling capabilities.

[Publication Details](/publications/#Cao_Yanshuai_PhD_thesis){:target="_blank"}

#### Efficient Optimization for Sparse Gaussian Process Regression
A key contribution was developing an efficient optimization algorithm for selecting inducing points in sparse Gaussian Process regression. The method achieves linear time and space complexity while maintaining state-of-the-art performance.

[Publication Details](/publications/#tpami15_caoy){:target="_blank"}

#### Generalized Product of Experts for GP Fusion
We proposed a generalized product of experts (gPoE) framework for combining predictions of multiple Gaussian Process models. The method is highly scalable as individual GP experts can be trained in parallel, while maintaining expressiveness and robustness.

[Publication Details](/publications/#cao2014generalized){:target="_blank"}

#### Transductive Log Opinion Pool of GP Experts
Building on the gPoE work, we developed a theoretical framework for analyzing transductive combinations of GP experts. This provides theoretical justification for the empirical success of gPoE while suggesting improvements.

[Publication Details](/publications/#cao2015transductive){:target="_blank"}

### Impact

This series of works has contributed to making Gaussian Process models more practical for large-scale applications by:
- Developing efficient optimization methods with linear complexity
- Creating principled ways to combine multiple GP experts
- Providing theoretical frameworks for understanding model behavior
- Making available open-source implementations

The methods have been applied in various domains requiring probabilistic regression on large datasets.