---
layout: page
title: Adversarial Learning and Robustness
description: Research on adversarial robustness and adversarial learning approaches
img: assets/img/feat_adv.png
importance: 3
category: research
---

This project encompasses research in two key areas of adversarial machine learning: studying the robustness of neural networks against adversarial attacks, and leveraging adversarial approaches for improved representation learning and generation.

---

## Adversarial Robustness

### Adversarial Manipulation of Deep Representations
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/feat_adv.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

A foundational investigation revealing how adversarial perturbations can manipulate internal neural network representations while maintaining perceptual similarity. This work demonstrated that DNNs can be tricked to confound almost any image with any other chosen image.

[Publication Details](/publications/#SabourCFF15){:target="_blank"}

### Adversarial Robustness of Pruned Neural Networks
An investigation into how network pruning affects adversarial robustness. We discovered that while pruned models maintain accuracy, they become more vulnerable to adversarial attacks. The work reveals important trade-offs between model compression, accuracy, and robustness.

[Publication Details](/publications/#wang2018adversarial){:target="_blank"}

---

## Adversarial Learning and Generation

### Improving GAN Training via Binarized Representation Entropy (BRE)
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bre_gan.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We introduced a novel regularization approach for GAN training that encourages the discriminator to better allocate its model capacity through maximizing binary activation pattern entropy. This leads to more stable training and improved sample quality.

[Publication Details](/publications/#cao2018improving){:target="_blank"}

### Implicit Manifold Learning on Generative Adversarial Networks
A theoretical investigation into how GANs learn data manifolds implicitly through adversarial training, providing insights into GAN dynamics and failure modes.

[Publication Details](/publications/#lui2017implicit){:target="_blank"}

### Adversarial Contrastive Estimation
We developed an adversarial approach to negative mining for contrastive learning, showing how to automatically generate informative negative examples that improve representation learning.

[Publication Details](/publications/#bose-etal-2018-adversarial){:target="_blank"}

### Compositional Hard Negatives for Visual-Semantic Embeddings
An adversarial approach to generating hard negative examples by composing novel combinations of objects and regions across different images. This technique improved the learning of visual-semantic embeddings.

[Publication Details](/publications/#Bose2018CompositionalHN){:target="_blank"}

---

## Impact

This research has advanced the field of adversarial machine learning by:
- Revealing fundamental vulnerabilities in deep neural representations
- Identifying critical trade-offs between model compression and robustness
- Developing novel regularization techniques for stable GAN training
- Creating practical approaches for improved representation learning through adversarial techniques
- Providing theoretical frameworks for understanding adversarial learning dynamics

The methods and insights have influenced both the theoretical understanding of deep learning robustness and practical applications in computer vision and generative modeling. 